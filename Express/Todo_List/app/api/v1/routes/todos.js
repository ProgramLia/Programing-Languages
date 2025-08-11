const { authMiddleware, roleMiddlewer, userVerify} = require("../../../middleware/auth");
const { createTodo, updateTodo, deleteTodo, getTodo } = require("../controllers/todos");

const router = require("express").Router();

// get-todos...
router.get("/todos", authMiddleware, userVerify  ,roleMiddlewer( "user"), getTodo);

// create-todo...
router.post("/todos", authMiddleware , userVerify  , roleMiddlewer( "user" ), createTodo);

// update-todo...
router.put("/todos/:idTodo", authMiddleware ,  userVerify  ,roleMiddlewer( "user"), updateTodo);

// cdelete-todo...
router.delete("/todos/:idTodo", authMiddleware , userVerify  , roleMiddlewer( "user"), deleteTodo);

module.exports = router;