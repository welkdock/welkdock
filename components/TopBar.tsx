import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <p>{site.legalName} operating as Welkdock Technologies</p>
        <p className="topbar__links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </div>
  );
}
