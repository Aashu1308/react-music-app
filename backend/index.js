import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/musicdb', {
});

// Check for successful connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Check for connection errors
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Check for disconnection
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Schema for users of app
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
        unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
import express from 'express';
const app = express();
import cors from 'cors';
const port = 8080;
console.log("App listen at port 8080");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.post("/", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(port);