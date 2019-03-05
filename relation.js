var Number = Parse.Object.extend("Class");
var Name = Parse.Object.extend("Name);
var Major = Parse.Object.extend("Major");
var Grade = Parse.Object.extend("Grade");

var newClass = new Class();
newClass.set("number", classNumber);
newClass.set("Name", className);
newClass.set("Major", classMajor);
newClass.set("Grade", classGrade);
var classACL = new Parse.ACL(currentUser);
classACL.setPublicReadAccess(true);
newClass.setACL(classACL);

newClass.save();



    for (var j = 0; j < studentNames[i].length; j++) {
        if (studentNames[i][j]) {
            var student = new Student();
            student.set("name", studentNames[i][j]);

            student.set("Major", Number);

            student.save();
        }
    }

    Student.set("Major", newClass);

    Student.save();
}

newClass.save(null, {
    success: function(newClass) {
        //success
    },
    error: function(newClass, error) {
        //fail
    }
});