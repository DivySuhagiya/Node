const mailer = require("nodemailer");

const sendMail = async (to, userName, otp) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "divysuhagiya.190670107134@gmail.com",
      pass: "dvmafmirstjoebdu",
    },
  });

  const option = {
    from: "divysuhagiya.190670107134@gmail.com",
    to: to,
    subject: "Hello",
    html: `<div
    style="padding:0!important;margin:0 auto!important;display:block!important;min-width:100%!important;width:100%!important;background:#ffffff">
    <center>
        <table style="margin:0;padding:0;width:100%;height:100%" class="m_3027422512659328915gwfw" width="100%"
            cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff">
            <tbody>
                <tr>
                    <td style="margin:0;padding:0;width:100%;height:100%" valign="top" align="center">
                        <table class="m_3027422512659328915m-shell" width="775" cellspacing="0" cellpadding="0"
                            border="0">
                            <tbody>
                                <tr>
                                    <td class="m_3027422512659328915td"
                                        style="width:775px;min-width:775px;font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal">
                                        <table width="100%" cellspacing="0" cellpadding="0" border="0">

                                            <tbody>
                                                <tr>
                                                    <td class="m_3027422512659328915mpy-35 m_3027422512659328915mpx-15"
                                                        style="padding:80px" bgcolor="#212429">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0">


                                                            <tbody>
                                                                

                                                                <tr>
                                                                    <td>

                                                                        <table width="100%" cellspacing="0"
                                                                            cellpadding="0" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style="font-size:36px;line-height:42px;font-family:Arial,sans-serif,'Motiva Sans';text-align:left;padding-bottom:30px;color:#bfbfbf;font-weight:bold">
                                                                                        Dear ${userName},</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table width="100%" cellspacing="0"
                                                                            cellpadding="0" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style="font-size:18px;line-height:25px;font-family:Arial,sans-serif,'Motiva Sans';text-align:left;color:#dbdbdb;padding-bottom:30px">
                                                                                        Here is the OTP you
                                                                                        need to signup </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table width="100%" cellspacing="0"
                                                                            cellpadding="0" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="m_3027422512659328915mpb-50"
                                                                                        style="padding-bottom:70px">
                                                                                        <table width="100%"
                                                                                            cellspacing="0"
                                                                                            cellpadding="0" border="0"
                                                                                            bgcolor="#17191c">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td
                                                                                                        style="padding-top:30px;padding-bottom:30px;padding-left:56px;padding-right:56px">
                                                                                                        <table
                                                                                                            width="100%"
                                                                                                            cellspacing="0"
                                                                                                            cellpadding="0"
                                                                                                            border="0">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td
                                                                                                                        style="font-size:48px;line-height:52px;font-family:Arial,sans-serif,'Motiva Sans';color:#3a9aed;font-weight:bold;text-align:center">
                                                                                                                        ${otp}
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <table width="100%" cellspacing="0"
                                                                            cellpadding="0" border="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td
                                                                                        style="font-size:18px;line-height:25px;font-family:Arial,sans-serif,'Motiva Sans';text-align:left;color:#dbdbdb;padding-bottom:30px">
                                                                                        This email was generated because
                                                                                        of a signup attempt from a web or
                                                                                        mobile device <br><br>
                                                                                        The Otp is required
                                                                                        to complete the signup. <span
                                                                                            style="color:#ffffff;font-weight:bold">No
                                                                                            one can access your account
                                                                                            without also accessing this
                                                                                            email.</span><br><br>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>



                                                <tr>
                                                    <td class="m_3027422512659328915mpy-40 m_3027422512659328915mpx-15"
                                                        style="padding-top:60px;padding-bottom:60px;padding-left:90px;padding-right:90px">
                                                        <table width="100%" cellspacing="0" cellpadding="0" border="0">

                                                            <tbody>
                                                                <tr>
                                                                        This email message was auto-generated. Please do
                                                                        not respond. </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
    </center>
</div>`,
  };

  transporter.sendMail(option, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
module.exports = { sendMail };
