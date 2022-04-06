const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogs: [
    {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  ],
});

blogSchema.methods.addblog = async function (title, content) {
  try {
    this.blogs = this.blogs.concat({ title, content });
    await this.save();
    return this.blogs;
  } catch (error) {
    console.log(error);
  }
};

const Blog = mongoose.model("BLOG", blogSchema);

module.exports = Blog;
