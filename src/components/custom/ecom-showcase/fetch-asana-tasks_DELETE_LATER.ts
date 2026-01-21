const PAT =
  "2/1207194821264241/1212915300147406:d745088d7a4f1ce16aa51c1e980222a1";
const WORKSPACE_ID = "375643158116881";
const headers = { Authorization: `Bearer ${PAT}` };

export async function getAsanaData() {
  let allTasks: any[] = [];
  // Added more depth to the project lookup fields
  let nextUrl: string | null =
    `https://app.asana.com/api/1.0/tasks?assignee=me&workspace=${WORKSPACE_ID}&limit=100&include_subtasks=true&opt_fields=name,completed,projects.name,notes,modified_at,parent.projects.name,parent.name,resource_subtype`;

  try {
    while (nextUrl) {
      const res = await fetch(nextUrl, { headers });
      const json: any = await res.json();
      if (!json.data) break;
      allTasks = [...allTasks, ...json.data];
      nextUrl = json.next_page ? json.next_page.uri : null;
    }

    // 1. Group tasks by project
    const groups = allTasks.reduce((acc: any, task: any) => {
      const projectName =
        task.projects?.[0]?.name ||
        task.parent?.projects?.[0]?.name ||
        "Personal / Misc";
      if (!acc[projectName]) acc[projectName] = [];
      acc[projectName].push(task);
      return acc;
    }, {});

    // 2. Sort the Projects Alphabetically and the Tasks by Date
    const organizedData: any = {};
    Object.keys(groups)
      .sort()
      .forEach((key) => {
        organizedData[key] = groups[key].sort(
          (a: any, b: any) =>
            new Date(b.modified_at).getTime() -
            new Date(a.modified_at).getTime(),
        );
      });

    return organizedData;
  } catch (err) {
    console.error("Fetch failed:", err);
    return {};
  }
}
