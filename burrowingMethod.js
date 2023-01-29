const hitesh = {
  firstName : "hitesh",
  lastName : "choudhary",
  role : "admin",
  courseCount : 3,
  getInfo : function(){
      console.log(`
          first name is : ${this.firstName}
          last name is : ${this.lastName}
          role is : ${this.role}
          courseCount is : ${this.courseCount}
      `);
  },
}
const dj = {
  firstName : "dj",
  lastName : "ok",
  role : "sub-admin",
  courseCount : 1,
}
// hitesh.getInfo();
let val = hitesh.getInfo.bind(dj);
val();
hitesh.getInfo();
val();
hitesh.getInfo();