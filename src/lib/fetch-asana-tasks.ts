import type { SanitisedAsanaData, SanitisedAsanaDataEntry } from "./ecom-asana-tasks";

export async function getAsanaData(
  pat: string,
  workspaceId: string,
): Promise<SanitisedAsanaData> {
  const headers = { Authorization: `Bearer ${pat}` };
  let allTasks: any[] = [];
  // Added created_at to opt_fields for sorting by creation date
  let nextUrl: string | null =
    `https://app.asana.com/api/1.0/tasks?assignee=me&workspace=${workspaceId}&limit=100&include_subtasks=true&opt_fields=gid,name,created_at,notes,projects.name,parent.projects.name`;

  try {
    while (nextUrl) {
      const res = await fetch(nextUrl, { headers });
      const json: any = await res.json();
      if (!json.data) break;
      allTasks = [...allTasks, ...json.data];
      nextUrl = json.next_page ? json.next_page.uri : null;
    }

    // 1. Sort all tasks by created_at date (newest to oldest)
    const sortedTasks = allTasks.sort(
      (a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

    // 2. Transform into SanitisedAsanaData structure
    const sanitisedData: SanitisedAsanaData = {
      data: sortedTasks.map(
        (task: any): SanitisedAsanaDataEntry => ({
          id: task.gid,
          name: task.name || "",
          createdAt: task.created_at,
          notes: task.notes || "",
          projectName:
            task.projects?.[0]?.name ||
            task.parent?.projects?.[0]?.name ||
            null,
        }),
      ),
    };

    // 3. Log the entire final data object
    console.log(JSON.stringify(sanitisedData, null, 2));

    return sanitisedData;
  } catch (err) {
    console.error("Fetch failed:", err);
    return { data: [] };
  }
}
