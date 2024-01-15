// About Ella
const before = { 
  name: 'Yeonsu Choi',
  country: 'South Korea',
  job: 'Marketer & CX Manager' 
};
const updated = {
  ...before,
  job: 'Frontend Developer',
  motto: 'Useful to everyone in their everyday lives',
};

console.log(updated);

// About Tech
const languages = ['Javascript', 'Typescript', 'HTML', 'CSS'];
const frontend = ['React', 'TailwindCSS', 'StyledComponents'];
const tools = ['Slack', 'Notion', 'Figma', 'etc'];

console.log({ languages, frontend, tools });
