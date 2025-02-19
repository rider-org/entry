import { exec } from "child_process";

const REPOS: { name: string; dir: string }[] = [];

for (const repo of REPOS) {
  exec(
    `git clone https://github.com/${repo.name} ${repo.dir}`,
    (err, stdout, stdin) => {
      console.log(stdout, stdin);
    }
  );
}
