<?php

class PHP_Email_Form {

    // Variables to store form data
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $smtp;
    public $ajax = false;
    
    // Array to hold the messages added
    private $messages = array();

    // Function to add messages to the email body
    public function add_message($message, $label, $order = 0) {
        $this->messages[$order] = "$label: $message\n";
    }

    // Function to validate email
    private function is_valid_email($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    // Function to send the email
    public function send() {
        // Validate email address
        if (!$this->is_valid_email($this->from_email)) {
            return 'Invalid email format';
        }

        // Set headers
        $headers = "From: {$this->from_name} <{$this->from_email}>\r\n";
        $headers .= "Reply-To: {$this->from_email}\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Compile the message body
        ksort($this->messages); // Sort by the $order (optional)
        $body = implode("\n", $this->messages);

        // Send the email using mail() function
        if (mail($this->to, $this->subject, $body, $headers)) {
            return 'Email sent successfully!';
        } else {
            return 'Failed to send email.';
        }
    }
}
