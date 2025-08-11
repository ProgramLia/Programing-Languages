const generateOtpEmail = (username, otp) => `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>OTP Verifikasi - Tumbaz</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f2f4f6;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      text-align: center;
    }
    .logo {
      font-size: 28px;
      font-weight: bold;
      color: #007bff;
      margin-bottom: 10px;
    }
    .greeting {
      font-size: 18px;
      color: #333333;
    }
    .instruction {
      margin-top: 10px;
      font-size: 15px;
      color: #555555;
    }
    .otp-box {
      margin: 30px auto;
      font-size: 32px;
      font-weight: bold;
      background-color: #f0f4ff;
      color: #2c3e50;
      display: inline-block;
      padding: 16px 30px;
      border-radius: 8px;
      letter-spacing: 8px;
      user-select: text;
    }
    .expire-note {
      font-size: 13px;
      color: #999999;
      margin-top: 20px;
    }
    .footer {
      margin-top: 40px;
      font-size: 12px;
      color: #aaaaaa;
      border-top: 1px solid #eeeeee;
      padding-top: 15px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="logo">Tumbaz</div>
    <div class="greeting">Halo, ${username} 👋</div>
    <div class="instruction">Gunakan kode berikut untuk verifikasi akunmu:</div>
    
    <div class="otp-box">${otp}</div>

    <div class="expire-note">Kode OTP ini berlaku selama 5 menit.</div>

    <div class="footer">
      &copy; ${new Date().getFullYear()} Tumbaz. All rights reserved.
    </div>
  </div>
</body>
</html>
`;
 module.exports = generateOtpEmail;