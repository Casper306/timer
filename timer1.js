
const args = process.argv.slice(2);
const timer = function () {

  for (const time of args) {
    if (time < 0 || isNaN(time)) {
      return 'err';
    }

    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(time);
    }, time * 1000)
  } return;
};
timer();