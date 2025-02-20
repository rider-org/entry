import { exec } from "child_process";

const REPOS: { name: string; dir: string }[] = [
  { name: "rider-org/mobile", dir: "mobile" },
  { name: "rider-org/server", dir: "server" }
];

for (const repo of REPOS) {
  exec(
    `git clone https://github.com/${repo.name} ${repo.dir}`,
    (_, stdout, stdin) => {
      console.log(stdout, stdin);
    }
  );
}
