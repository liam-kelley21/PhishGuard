const scenarioData = [
    // 1. ACCOUNT SECURITY
    ["Account Security", "Easy", "security@accounts.example", "New sign-in detected", "We noticed a sign-in from a new device. If this was you, no action is needed. You can review your security activity by opening your account settings directly.", "legitimate", "The message provides a routine security notification and does not demand credentials or use a suspicious link."],
    ["Account Security", "Easy", "support@micros0ft-alert.example", "URGENT: Account suspension", "Your account will be permanently deleted in 30 minutes. Verify your password immediately using the link below or lose access forever. [SIMULATED LINK]", "phishing", "The sender uses a lookalike name, and the threat of immediate deletion creates artificial urgency."],
    ["Account Security", "Medium", "no-reply@accounts.example", "Your password was changed", "This is a confirmation that your password was successfully changed. If you did not make this change, visit the service's official website directly to secure your account.", "legitimate", "This is a reasonable account notification. It does not ask the recipient to disclose their password."],
    ["Account Security", "Medium", "verify@account-protection.example", "Unusual account activity", "We detected suspicious activity. Reply to this email with your username, password, and security code so our team can verify your identity.", "phishing", "Legitimate support teams should not ask users to send passwords or security codes through email."],
    ["Account Security", "Hard", "security-team@account.example", "Review your recent login activity", "A sign-in was recorded from a device that is not recognized by your account. Open the official application and review your recent login history. Do not share your verification codes with anyone.", "legitimate", "The message gives sensible security advice and directs users to the official application rather than an embedded login link."],
    ["Account Security", "Hard", "account-recovery@secure-login.example", "Recovery request pending", "A password recovery request has been started. To cancel it, enter your current password and one-time authentication code at the page below. [SIMULATED LINK]", "phishing", "The request uses a potentially deceptive cancellation process to collect credentials and authentication codes."],
    ["Account Security", "Easy", "alerts@profile.example", "Your recovery email was updated", "Your account recovery email address was recently updated. If you made this change, no action is required. Otherwise, review your account security settings directly.", "legitimate", "This is a routine notification with no pressure to click a link or provide sensitive information."],
    ["Account Security", "Medium", "admin@secure-account-check.example", "Action required: Confirm identity", "Your account has been flagged. Send a photo of your identification and your password to this address to prevent restrictions.", "phishing", "The sender requests highly sensitive personal information and a password by email."],
    ["Account Security", "Hard", "notifications@account.example", "Two-step verification enabled", "Two-step verification has been enabled on your account. You can review your security settings through the official application.", "legitimate", "The message confirms a security change and provides a safe way to review it."],
    ["Account Security", "Hard", "security@account-verify.example", "Your verification code expires now", "Your account is at risk. Forward the six-digit verification code you just received to our security department immediately.", "phishing", "Verification codes should never be shared. Attackers may use them to take over accounts."],

    // 2. BANKING AND PAYMENTS
    ["Banking & Payments", "Easy", "receipts@payments.example", "Payment receipt", "Your simulated purchase has been completed. The receipt is available in your account transaction history. No response is needed.", "legitimate", "A normal payment receipt does not demand immediate action or sensitive information."],
    ["Banking & Payments", "Easy", "fraud-alert@banking-secure.example", "Your account is frozen", "Your bank account has been frozen. Click immediately and enter your full card number, PIN, and online banking password to restore access. [SIMULATED LINK]", "phishing", "The message requests a PIN and password through an unexpected link. These are major warning signs."],
    ["Banking & Payments", "Medium", "billing@payments.example", "Monthly statement available", "Your latest monthly statement is ready. Sign in through the official banking application to review your transactions.", "legitimate", "The message directs the recipient to the official application instead of requesting information by email."],
    ["Banking & Payments", "Medium", "refunds@payment-recovery.example", "You are owed a refund", "A refund of $284.99 is waiting. Enter your debit card number and online banking password to receive your money.", "phishing", "Unexpected refunds that require banking credentials are a common phishing tactic."],
    ["Banking & Payments", "Hard", "alerts@card-services.example", "Card transaction notification", "A transaction was recorded on your card. If you do not recognize it, contact your bank using the phone number printed on your card.", "legitimate", "The message recommends contacting the bank through a trusted channel."],
    ["Banking & Payments", "Hard", "payments@invoice-settlement.example", "Overdue balance: Immediate payment", "Your balance is overdue. Pay using the attached payment form or your account will be referred for legal action today.", "phishing", "Threatening legal consequences and pushing an unexpected payment form are suspicious indicators."],
    ["Banking & Payments", "Easy", "billing@subscription.example", "Subscription payment confirmed", "Your monthly subscription payment was processed successfully. You can view your receipt in your account.", "legitimate", "This is a routine payment confirmation with no request for credentials."],
    ["Banking & Payments", "Medium", "wire-team@urgent-transfer.example", "Transfer verification required", "A transfer is waiting for approval. Reply with your account number and security PIN to release the funds.", "phishing", "A legitimate financial institution should not ask for a PIN through email."],
    ["Banking & Payments", "Hard", "statements@finance.example", "Your quarterly statement is ready", "Your quarterly statement is available in the secure account portal. Access it by typing the official website address into your browser.", "legitimate", "The message uses a safe access method and does not pressure the recipient."],
    ["Banking & Payments", "Hard", "support@payment-dispute.example", "Dispute rejected — verify payment details", "Your dispute cannot continue until you confirm your full card number, expiration date, security code, and banking password.", "phishing", "The sender requests excessive financial information, including a card security code and password."],

    // 3. SHIPPING AND DELIVERY
    ["Shipping & Delivery", "Easy", "updates@parcel.example", "Your package is on its way", "Your package has shipped. You can check the delivery status by opening the retailer's official website and reviewing your order.", "legitimate", "The message provides ordinary shipping information without demanding payment or personal details."],
    ["Shipping & Delivery", "Easy", "delivery@parcel-fee.example", "Package held — pay a small fee", "Your package cannot be delivered until you pay a $1.99 redelivery fee. Submit your card information immediately. [SIMULATED LINK]", "phishing", "Unexpected small delivery fees are often used to trick people into entering card information."],
    ["Shipping & Delivery", "Medium", "tracking@courier.example", "Delivery scheduled for tomorrow", "Your delivery is scheduled for tomorrow. If you are unavailable, review delivery options through the courier's official website.", "legitimate", "The notification is informational and points users toward the official website."],
    ["Shipping & Delivery", "Medium", "support@delivery-reschedule.example", "Address problem with your package", "Your address is incomplete. Reply with your full name, home address, date of birth, and payment information to correct it.", "phishing", "The sender requests unnecessary personal and financial information by email."],
    ["Shipping & Delivery", "Hard", "notifications@shipment.example", "Delivery attempt unsuccessful", "A delivery attempt was unsuccessful. Check the tracking information from your original order confirmation or the courier's official website.", "legitimate", "The message suggests checking an existing trusted source rather than clicking an unexpected link."],
    ["Shipping & Delivery", "Hard", "customs@parcel-clearance.example", "Customs payment overdue", "Your international package is being held. Pay the customs charge within two hours or the shipment will be destroyed.", "phishing", "The extreme deadline and threat of package destruction are pressure tactics."],
    ["Shipping & Delivery", "Easy", "orders@store.example", "Your order confirmation", "Thank you for your purchase. Your order confirmation is available in your account order history.", "legitimate", "This is a normal order confirmation and does not ask for sensitive information."],
    ["Shipping & Delivery", "Medium", "parcel@missed-delivery.example", "We could not locate your address", "We need your exact location and a photo of your identification before we can release your package.", "phishing", "The request for identification and precise personal details is excessive for a routine delivery notice."],
    ["Shipping & Delivery", "Hard", "dispatch@courier.example", "Package delivered successfully", "Your package was marked as delivered. If you cannot locate it, review the order details and contact the retailer through its official support channel.", "legitimate", "The message gives a reasonable next step through a trusted support channel."],
    ["Shipping & Delivery", "Hard", "tracking@parcel-confirmation.example", "Confirm your delivery to avoid return", "Your package will be returned unless you enter your email password and card details on the confirmation page.", "phishing", "A delivery service has no legitimate reason to request your email password."],

    // 4. COLLEGE AND STUDENT EMAILS
    ["College & Student", "Easy", "registrar@carrollcc.example", "Registration period reminder", "The upcoming registration period is approaching. Visit the official college website to review registration dates and course information.", "legitimate", "The message provides routine academic information and directs students to the official college website."],
    ["College & Student", "Easy", "scholarships@student-grant.example", "You have been selected for a grant", "You have been selected for a $5,000 student grant. Pay a processing fee today to claim your award.", "phishing", "Unexpected awards that require upfront fees are a common scam warning sign."],
    ["College & Student", "Medium", "library@carrollcc.example", "Library hours update", "The college library will have adjusted hours during the upcoming holiday. Please review the college's official announcements for details.", "legitimate", "The message is informational and does not ask the student to disclose personal information."],
    ["College & Student", "Medium", "it-help@campus-password.example", "Student email password expires", "Your student email will be disabled tonight. Reply with your current password so IT can renew your account.", "phishing", "IT staff should never request a student's current password by email."],
    ["College & Student", "Hard", "advising@carrollcc.example", "Academic advising appointment reminder", "This is a reminder of your scheduled advising appointment. Contact the advising office using the contact details on the official college website if you need to reschedule.", "legitimate", "The message uses a normal appointment reminder and a trusted contact method."],
    ["College & Student", "Hard", "financial-aid@college-awards.example", "Financial aid verification needed", "Your financial aid will be canceled unless you upload your Social Security number and banking password through the attached form.", "phishing", "The message requests highly sensitive information through an unexpected attachment."],
    ["College & Student", "Easy", "events@campus.example", "Upcoming student organization event", "A student organization event is scheduled for next week. Check the official campus events calendar for location and registration information.", "legitimate", "This is a routine campus announcement that directs students to an official resource."],
    ["College & Student", "Medium", "professor@grade-review.example", "Your final grade is being withheld", "Your final grade cannot be released until you confirm your student login and password using this form.", "phishing", "Grades should not require students to submit passwords through an email form."],
    ["College & Student", "Hard", "career-services@campus.example", "Resume review appointment available", "Career Services has opened additional resume review appointments. Sign in through the college's official student portal to view availability.", "legitimate", "The message describes a plausible college service and recommends using the official portal."],
    ["College & Student", "Hard", "student-records@urgent-campus.example", "Enrollment cancellation notice", "Your enrollment will be canceled in one hour. Send a copy of your ID and your portal password to prevent removal.", "phishing", "The urgent threat and request for identification and a password are strong warning signs."],

    // 5. WORKPLACE AND EMPLOYMENT
    ["Workplace & Employment", "Easy", "hr@company.example", "Staff meeting reminder", "Reminder: The monthly staff meeting will take place tomorrow. Please review the internal calendar for the meeting details.", "legitimate", "This is a normal workplace reminder with no unusual request."],
    ["Workplace & Employment", "Easy", "payroll@employee-payroll.example", "Payroll issue — confirm details", "Your paycheck is delayed. Reply with your bank account password and employee login to release your payment.", "phishing", "Payroll departments should not ask for bank passwords or employee login credentials by email."],
    ["Workplace & Employment", "Medium", "benefits@company.example", "Benefits enrollment period", "The annual benefits enrollment period is open. Review your available options through the company's normal employee portal.", "legitimate", "This is a routine employee notification and recommends using the known portal."],
    ["Workplace & Employment", "Medium", "ceo@company-executive.example", "Confidential urgent request", "I am in a meeting. Purchase gift cards immediately and send me the codes. Do not tell anyone else.", "phishing", "This is a classic executive impersonation scam using secrecy and urgency."],
    ["Workplace & Employment", "Hard", "it-notices@company.example", "Scheduled maintenance notice", "The employee portal will be unavailable during scheduled maintenance tonight. No action is required from employees.", "legitimate", "The notice is informational and does not request credentials or payment."],
    ["Workplace & Employment", "Hard", "recruiting@instant-hire.example", "Job offer — no interview required", "You have been hired for a remote position. Pay a $150 equipment fee today and send your banking information for direct deposit.", "phishing", "Upfront fees and requests for banking information before a credible hiring process are major red flags."],
    ["Workplace & Employment", "Easy", "scheduling@company.example", "Updated work schedule", "Your work schedule has been updated. Review the latest version through your organization's normal scheduling system.", "legitimate", "The email directs the employee to a familiar system and does not ask for sensitive data."],
    ["Workplace & Employment", "Medium", "shared-document@office-access.example", "A coworker shared a document", "A document has been shared with you. Enter your work email password on this external page to view it.", "phishing", "An unexpected external login page may be designed to steal workplace credentials."],
    ["Workplace & Employment", "Hard", "training@company.example", "Annual security training reminder", "Your annual security awareness training is due this month. Check the employee learning portal for the assigned course.", "legitimate", "The message provides a reasonable reminder and points to the established learning portal."],
    ["Workplace & Employment", "Hard", "vendor-payment@invoice-change.example", "Urgent change to payment details", "Our company has changed banks. Send all future payments to the new account listed in the attached document. Do not call to confirm.", "phishing", "Unexpected payment changes combined with instructions not to verify by phone are strong business email compromise indicators."],

    // 6. SOCIAL MEDIA
    ["Social Media", "Easy", "notifications@social.example", "You have a new follower", "Someone has started following your profile. Open the official application to view your recent activity.", "legitimate", "This is a routine social notification that does not request credentials."],
    ["Social Media", "Easy", "copyright@profile-protection.example", "Your account will be deleted", "Your profile has violated copyright rules. Enter your password immediately to appeal or your account will be removed.", "phishing", "The message uses fear of account deletion to pressure the user into entering a password."],
    ["Social Media", "Medium", "alerts@social.example", "New login notification", "A login was detected on your account. If you do not recognize it, review active sessions through the official application.", "legitimate", "The message gives a sensible security recommendation without collecting information."],
    ["Social Media", "Medium", "verification@blue-check-reward.example", "Claim your free verified badge", "You qualify for a free verified badge. Send your login details and a copy of your ID to activate it.", "phishing", "The unexpected reward is being used to request account credentials and identity documents."],
    ["Social Media", "Hard", "privacy@social.example", "Privacy settings update", "We have updated our privacy settings information. You can review the changes through the privacy section of the official application.", "legitimate", "The message provides general information and recommends accessing settings directly."],
    ["Social Media", "Hard", "support@appeal-social-account.example", "Your appeal has been rejected", "Your account appeal has been rejected. Pay a verification fee and provide your password to reopen the case.", "phishing", "A fee and password request to appeal an account decision are suspicious."],
    ["Social Media", "Easy", "messages@community.example", "You received a new message", "You have a new message notification. Open the official application to view it.", "legitimate", "This is a basic notification without pressure or unusual requests."],
    ["Social Media", "Medium", "contest@viral-prize.example", "You won a creator giveaway", "You were randomly selected to win a new phone. Pay shipping and processing fees using the attached form.", "phishing", "Unexpected prizes that require fees before delivery are a common scam pattern."],
    ["Social Media", "Hard", "security@community.example", "Connected application removed", "A third-party application was disconnected from your profile. Review your connected applications in the official account settings if you did not make this change.", "legitimate", "The notification describes a plausible account event and suggests a safe review process."],
    ["Social Media", "Hard", "copyright-team@social-platform-appeal.example", "Final copyright warning", "Your account will be permanently restricted unless you download and complete the attached appeal form within 15 minutes.", "phishing", "The artificial deadline and unexpected attachment are designed to create pressure and encourage unsafe action."],

    // 7. TECH SUPPORT
    ["Tech Support", "Easy", "updates@software.example", "Software update available", "A new software update is available. Open the application's built-in update settings to review and install it.", "legitimate", "The message recommends using the application's built-in update process."],
    ["Tech Support", "Easy", "support@virus-cleaner-alert.example", "Your computer is infected", "Your computer has 37 viruses. Call this number immediately and give our technician remote access to remove them.", "phishing", "Unexpected virus warnings and unsolicited requests for remote access are common tech-support scam tactics."],
    ["Tech Support", "Medium", "status@cloud-service.example", "Service maintenance completed", "Scheduled maintenance has been completed. The service is now available. No action is required.", "legitimate", "This is a routine service status update with no unusual request."],
    ["Tech Support", "Medium", "helpdesk@remote-fix.example", "Critical computer error detected", "Download the attached repair tool and disable your antivirus software before running it.", "phishing", "Disabling antivirus and installing an unexpected attachment are dangerous instructions."],
    ["Tech Support", "Hard", "notices@software.example", "Your application license renewal", "Your software license renewal is approaching. Review your subscription through the application's official account settings.", "legitimate", "The message recommends reviewing billing through the normal account settings."],
    ["Tech Support", "Hard", "admin@system-security-fix.example", "Mandatory security certificate", "Your device certificate has expired. Install the attached certificate and enter your administrator password to continue using your computer.", "phishing", "Unexpected certificate installations and administrator password requests can compromise a device."],
    ["Tech Support", "Easy", "backup@storage.example", "Backup completed", "Your scheduled backup completed successfully. You can review the backup status in the application's settings.", "legitimate", "This is an ordinary status notification that does not request action."],
    ["Tech Support", "Medium", "support@wifi-security-check.example", "Your Wi-Fi is exposed", "Your wireless network is exposed to hackers. Reply with your router password so we can secure it remotely.", "phishing", "A support contact should not request a router password through email."],
    ["Tech Support", "Hard", "security@software.example", "New device authorized", "A new device was authorized to access your software account. Review your authorized devices in the official application if this was unexpected.", "legitimate", "The notification gives the user a safe way to investigate an account event."],
    ["Tech Support", "Hard", "microsoft-help@remote-assistance.example", "Technical support case opened", "We opened a support case for your device. Install our remote access program and share the access code with this email address.", "phishing", "Unsolicited remote access requests can allow attackers to control a victim's device."],

    // 8. EVERYDAY NOTIFICATIONS
    ["Everyday Notifications", "Easy", "newsletters@updates.example", "Your weekly newsletter", "Your weekly newsletter is ready. You can read it through the subscription service or manage your preferences in your account.", "legitimate", "This is a routine newsletter with no suspicious demand."],
    ["Everyday Notifications", "Easy", "prize@unclaimed-reward.example", "You have been selected for a free vacation", "You have won a luxury vacation. Pay a small processing fee today to claim your prize.", "phishing", "Unexpected prizes requiring payment are a common fraud tactic."],
    ["Everyday Notifications", "Medium", "appointments@calendar.example", "Appointment reminder", "This is a reminder of your upcoming appointment. Review your calendar or contact the organization using a known phone number if you need to make changes.", "legitimate", "The message is informational and recommends a trusted way to verify details."],
    ["Everyday Notifications", "Medium", "billing@utility-refund.example", "Electric bill refund available", "We owe you a refund. Enter your banking password and card details to receive the money immediately.", "phishing", "A refund should not require a banking password or full payment card details by email."],
    ["Everyday Notifications", "Hard", "receipts@booking.example", "Reservation confirmation", "Your reservation has been confirmed. Review the details in your existing booking account or confirmation record.", "legitimate", "This is a routine confirmation and does not request unusual information."],
    ["Everyday Notifications", "Hard", "legal@unpaid-fine.example", "Final notice: Legal action pending", "You have an unpaid fine. Pay within one hour using the attached payment form or law enforcement will be notified.", "phishing", "The extreme urgency, threat of law enforcement, and unexpected payment form are suspicious."],
    ["Everyday Notifications", "Easy", "reminders@calendar.example", "Upcoming event reminder", "You have an event scheduled for tomorrow. Check your calendar application for the time and location.", "legitimate", "The message is a simple reminder with no request for personal information."],
    ["Everyday Notifications", "Medium", "support@subscription-cancel.example", "Your subscription will renew", "Your subscription is renewing today. Reply with your account password if you want to cancel the payment.", "phishing", "A legitimate cancellation process should never require sending a password by email."],
    ["Everyday Notifications", "Hard", "confirmations@travel.example", "Travel itinerary updated", "Your travel itinerary has been updated. Review the changes through the travel provider's official application or website.", "legitimate", "The message directs the recipient to an established service rather than an unexpected login page."],
    ["Everyday Notifications", "Hard", "claims@delivery-insurance.example", "Insurance claim payment waiting", "Your claim payment is ready. Send your Social Security number and bank login details to release the funds.", "phishing", "The sender requests highly sensitive identity and banking information to obtain a supposed payment."]
];

const scenarios = scenarioData.map((item, index) => ({
    id: index + 1,
    category: item[0],
    difficulty: item[1],
    sender: item[2],
    subject: item[3],
    body: item[4],
    answer: item[5],
    explanation: item[6]
}));

let currentQuestion = 0;
let score = 0;
let answered = false;
let quizScenarios = [];
let categoryResults = {};

const startButton = document.getElementById("startButton");
const training = document.getElementById("training");
const results = document.getElementById("results");
const feedback = document.getElementById("feedback");

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function startTraining() {
    currentQuestion = 0;
    score = 0;
    categoryResults = {};

    const difficultySelect = document.getElementById("difficultySelect");
    const selectedDifficulty = difficultySelect
        ? difficultySelect.value
        : "All";

    const filteredScenarios = selectedDifficulty === "All"
        ? scenarios
        : scenarios.filter(scenario => scenario.difficulty === selectedDifficulty);

    quizScenarios = shuffleArray(filteredScenarios);

    document.querySelector(".hero")?.classList.add("hidden");
    document.querySelector(".stats")?.classList.add("hidden");

    results.classList.add("hidden");
    training.classList.remove("hidden");

    loadScenario();
}

function loadScenario() {
    answered = false;
    feedback.classList.add("hidden");

    const scenario = quizScenarios[currentQuestion];

    document.getElementById("sender").textContent = scenario.sender;
    document.getElementById("subject").textContent = scenario.subject;
    document.getElementById("emailBody").textContent = scenario.body;

    document.getElementById("progress").textContent =
        `${String(currentQuestion + 1).padStart(2, "0")} / ${quizScenarios.length}`;

    document.getElementById("progressBar").style.width =
        `${((currentQuestion + 1) / quizScenarios.length) * 100}%`;

    const categoryElement = document.getElementById("category");
    if (categoryElement) {
        categoryElement.textContent = scenario.category;
    }

    const difficultyElement = document.getElementById("difficulty");
    if (difficultyElement) {
        difficultyElement.textContent = scenario.difficulty;
    }

    document.querySelectorAll(".answer-btn").forEach(button => {
        button.disabled = false;
    });

    document.getElementById("nextButton").textContent =
        currentQuestion === quizScenarios.length - 1
            ? "View Results →"
            : "Next Scenario →";
}

function checkAnswer(userAnswer) {
    if (answered) return;

    answered = true;

    const scenario = quizScenarios[currentQuestion];
    const correct = userAnswer === scenario.answer;

    if (correct) {
        score++;
    }

    if (!categoryResults[scenario.category]) {
        categoryResults[scenario.category] = {
            correct: 0,
            total: 0
        };
    }

    categoryResults[scenario.category].total++;

    if (correct) {
        categoryResults[scenario.category].correct++;
    }

    document.getElementById("feedbackTitle").textContent =
        correct ? "✓ Correct Answer!" : "✗ Incorrect Answer";

    document.getElementById("feedbackText").textContent =
        scenario.explanation;

    document.querySelectorAll(".answer-btn").forEach(button => {
        button.disabled = true;
    });

    feedback.classList.remove("hidden");
}

function nextScenario() {
    currentQuestion++;

    if (currentQuestion < quizScenarios.length) {
        loadScenario();
    } else {
        showResults();
    }
}

function showResults() {
    training.classList.add("hidden");
    results.classList.remove("hidden");

    const total = quizScenarios.length;
    const percentage = Math.round((score / total) * 100);

    document.getElementById("finalScore").textContent =
        `${score}/${total}`;

    let message;

    if (percentage === 100) {
        message = "Perfect score! You identified every email correctly.";
    } else if (percentage >= 85) {
        message = "Excellent work! You have strong phishing detection skills.";
    } else if (percentage >= 70) {
        message = "Great job! Keep practicing to sharpen your skills.";
    } else if (percentage >= 50) {
        message = "Not bad! Review the explanations and keep practicing.";
    } else {
        message = "More practice needed. Learn the warning signs and try again!";
    }

    document.getElementById("resultMessage").textContent =
        `${message} Your accuracy was ${percentage}%.`;

    const categoryElement = document.getElementById("categoryResults");

    if (categoryElement) {
        categoryElement.innerHTML = "";

        Object.entries(categoryResults).forEach(([category, data]) => {
            const percentage = Math.round(
                (data.correct / data.total) * 100
            );

            const row = document.createElement("p");
            row.textContent =
                `${category}: ${data.correct}/${data.total} correct (${percentage}%)`;

            categoryElement.appendChild(row);
        });
    }
}

startButton.addEventListener("click", startTraining);

document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", () => {
        checkAnswer(button.dataset.answer);
    });
});

document.getElementById("nextButton").addEventListener("click", nextScenario);

document.getElementById("restartButton").addEventListener("click", startTraining);