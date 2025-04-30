
const userSchema = new Schema({
    type: String,               // 📌 Defines the data type (String, Number, Boolean, Date, etc.)
    required: true,             // ✅ Ensures the field must be present (e.g., name, email)
    trim: true,                 // ✂️ Removes leading/trailing spaces (useful for names, emails)
    lowercase: true,            // 🔠 Converts string to lowercase (useful for emails, usernames)
    uppercase: true,            // 🔠 Converts string to uppercase (useful for country codes, etc.)
    unique: true,               // 🔒 Prevents duplicate entries (e.g., email, phone)
    minlength: 3,               // 🔢 Minimum string length (e.g., name ≥ 3 characters)
    maxlength: 50,              // 🔢 Maximum string length
    min: 13,                    // 🔢 Minimum value for numbers (e.g., age ≥ 13)
    max: 100,                   // 🔢 Maximum value for numbers (e.g., age ≤ 100)
    enum: ['male', 'female', 'other'],  // 🎯 Restricts value to a list (e.g., gender options)
    default: 'user',            // 🪄 Default value if none is provided (e.g., role = user)
    match: /regex/,             // 🧪 Validates format using regex (e.g., for email, phone numbers)
    select: false,              // 🚫 Excludes the field from query results (useful for passwords)
    immutable: true,            // 🧱 Field cannot be changed once set (e.g., email, createdAt)
    alias: 'fullName',          // 🪞 Alias for the field (lets you use `fullName` instead of `name`)
    validate: {
        validator: (val) => val.includes('@'), // 🧠 Custom validation logic
        message: 'Value must contain @'
    },
    get: (val) => val.toUpperCase(), // 🔄 Transforms value when reading from DB
    set: (val) => val.trim(),        // 🔄 Transforms value when saving to DB
    ref: 'OtherModel',         // 🔗 Refers to another collection (for population)
    default: Date.now          // 🕒 Automatically sets current date/time
})