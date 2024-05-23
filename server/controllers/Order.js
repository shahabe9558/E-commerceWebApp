exports.order = async (req, res) => {
    const {amount, cart} = req.body;
    let transporter = nodemailer.createTransport({
       host: process.env.MAIL_HOST,
       port: 587,
       secure: false,
       auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
       }
    });
    let mailOptions = {
       from: 'shahabe9559@gmail.com',
       to: 'alam955941@gmail.com',
       subject: 'Order On Shaznavi Rugs',
       text: `Order Reaceive of amount ${amount} 
       for item no. ${cart.length}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
       if (error) {
          console.log('Error occurred:', error);
       } else {
          console.log('Email sent:', info.response);
       }
    });
 }