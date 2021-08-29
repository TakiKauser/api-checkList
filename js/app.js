// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।

const loadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(jsonData => displayComments(jsonData));
}
loadComments();

// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 

const displayComments = comments => {
    const commentsContainer = document.getElementById("comments");
    
// ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

    comments.forEach(comment => {
        console.log(comment);
        const { name, email, body } = comment;
        const div = document.createElement("div");
        div.classList.add("w-50", "mx-auto", "my-5","p-3", "border", "border-secondary", "border-3", "rounded-1");
        div.innerHTML = `
        <h4>Name: ${name}</h4>
        <h5>Email: ${email}</h5>
        <p>${body}</p>
        `;
        commentsContainer.appendChild(div);
    });
}