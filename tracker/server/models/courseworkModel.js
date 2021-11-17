const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true,
    lowercase:true
  },
  modules:[
    {
      name:{type:String,required:true,},
      coursework:[
        { 
          name:{type:String,required:true,},
          syllabusUrl:{type:String,required:true,},
          repoUrl:{type:String,required:true,},
          rubricUrl:{type:String,required:true,}
        },
      ]
    },
  ]
});

const course = mongoose.model("coursework", CourseSchema);

module.exports=course;