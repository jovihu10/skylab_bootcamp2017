angular.module('collegeControllers', [])
    //El controller está dentro del module
    .controller('StudentController', function($scope) {

        var student = {
            firstName: "Rich",
            LastName: "Richie",
            fees: 500,

            //Dentro del objeto hay un array de objetos
            subjects: [
                { name: 'Physics', marks: 70 },
                { name: 'Chemistry', marks: 80 },
                { name: 'Math', marks: 65 },
                { name: 'English', marks: 75 },
                { name: 'Hindi', marks: 67 }

            ],
            fullName: function() {
                return this.firstName + " " + this.LastName;
            }
        };

        //Pasamos en el $scope student el objeto student
        $scope.student = student;
        $scope.greeting = function() {
            return "Greetings " + $scope.student.fullName();
        }
    });