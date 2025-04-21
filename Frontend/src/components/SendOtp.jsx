const handleSendOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("OTP sent!");
      } else {
        toast.error("Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Something went wrong.");
    }
  };
  