// CALL THE LIBRARY...
const router = require("express").Router();

const { authMiddleware, verifyMiddleware, roleMiddleware } = require("../../../middleware/auth");
const upload = require("../../../middleware/multer");
// IMPORT CONTROLLERS...
const { getTodos, createTodos, updateTodos, deleteTodos } = require("../controllers/todos");

// GET-TODOS...
router.get("/todos" ,  authMiddleware , verifyMiddleware , roleMiddleware("user" , "admin") , getTodos );

// GET-TODOS...
router.post("/todos" ,  authMiddleware  , verifyMiddleware , roleMiddleware("user" , "admin") , upload.single('image'), createTodos );

// GET-TODOS...
router.put("/todos/:id" ,  authMiddleware , verifyMiddleware , roleMiddleware("user" , "admin") , upload.single("image") ,updateTodos );

// GET-TODOS...
router.delete("/todos/:id" , authMiddleware , verifyMiddleware , roleMiddleware("user" , "admin") , deleteTodos );

module.exports = router;