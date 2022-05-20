function getAge(dateOfBirth) {
    let now = new Date()
    let birth = new Date(dateOfBirth)
    let age = now.getFullYear() - birth.getFullYear()

    if (now.getMonth() >= birth.getMonth() && now.getDate() >= birth.getDate()) {
        return age
    } else {
        return age - 1
    }
}

console.log(getAge('1997-06-28 16:27:00'));
// Print: 32