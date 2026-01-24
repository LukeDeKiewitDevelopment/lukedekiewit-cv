export const formatNotes = (notes?: string) => {
  if (!notes || notes === "") {
    return "No description provided."
  }

  let formattedNotes = notes;

  formattedNotes = formattedNotes.trim();
  formattedNotes = formattedNotes.replace(/[ \t]+$/gm, "");
  formattedNotes = formattedNotes.replace(/\n(\s*\n){2,}/g, "\n\n");

  return formattedNotes;
}

