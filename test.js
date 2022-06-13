function optionalParameters(name, age, gender = '남') {
  console.log(name, age, gender);
}

optionalParameters('윤영성', 26);

function optionalParameters2(name, gender = '남', age) {
  console.log(name, age, gender);
}

optionalParameters2('윤영성', 26);
