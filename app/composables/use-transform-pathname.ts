type PathItem = {
  title: string;
  link: string;
  icon?: string;
};

export default function (
  path: string,
  icons?: string[] | undefined
): PathItem[] | undefined {
  if (!path) return;
  let updatedPath: string[] = path.slice(1).split("/");
  let prevLink: string = '';
  const newPathnameList: PathItem[] = [];
  const hasIcons = !icons ? { icon: icons } : {};
  
  if (!updatedPath.length) return;

  for (let i = 0; i < updatedPath.length; i++) {
    prevLink += `/${updatedPath[i]}`
    newPathnameList.push({
      title: updatedPath[i]!.slice(0, 1).toUpperCase() + updatedPath[i]!.slice(1),
      link: prevLink,
      ...hasIcons,
    });
  }
  return newPathnameList;
}
