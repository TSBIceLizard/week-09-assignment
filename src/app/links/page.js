import linksStyles from "./links.module.css";
import Link from "next/link";

export default function LinksPage() {
  return (
    <>
      <div className={linksStyles.links_div}>
        <h2>Links to other communities!</h2>
        <p>
          <h3>Major modding platforms:</h3>
        </p>

        <p>
          ModDB (mod database):{" "}
          <Link href={"https://www.moddb.com/"}>ModDB</Link>
        </p>
        <p>
          GameBanana (formerly FPSBanana):
          <Link href={"https://www.gamebanana.com"}>GameBanana</Link>
        </p>
        <h3>Game communities:</h3>
        <p>
          <Link href={"https://www.oldunreal.com"}>OldUnreal</Link>
        </p>
        <p>
          The OldUnreal community. OldUnreal have direct permission from Epic
          Games Legal to be able to put Unreal, Unreal Tournament and soon
          Unreal Tournament 2004 for download completely free. Epic have also
          given them the game engines respective sourcecodes under NDA in order
          for for them to be able to be updated by the community for many years
          now.
        </p>
        <p>
          <Link href={"https://www.slipseer.com"}>Slipseer</Link>
        </p>
        <p>
          Slipseer is a relatively new Quake modding community and was created
          to resolve the slow vetting and upload of mods that was present in the
          most popular Quake mapping/modding website known as Quaddicted
        </p>
      </div>
    </>
  );
}
