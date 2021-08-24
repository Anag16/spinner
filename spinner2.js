process.stdout.write('hello from spinner1.js... \r\n');
let times = [100, 300, 500, 700, 900, 2500, 1100, 1500];
let backslahes = ['|   ','/   ','-   ',' |   ','/   ','- \\   '];

for (let i = 0; i < times.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + backslahes[i % 6]);
  }, times[i]);
}