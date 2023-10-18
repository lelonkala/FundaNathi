const express = require("express");
const courses = require("../controllers/courses");

const router = express.Router();

//Authorization
router.post("/add", courses.addCourse);
router.get("/", courses.getCourses);
router.put("/:id", courses.updateCourse);
router.delete("/:id", courses.deleteCourse);
router.delete("/delete", courses.deleteAllCourses);

//User Functions
module.exports = router;

