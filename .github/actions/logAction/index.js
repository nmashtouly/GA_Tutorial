const core = require('@actions/core');

try {
    // Get the input message or default one
    const message = core.getInput('message');

    // Log the message
    console.log(message);
} catch (error) {
    core.setFailed(error.message);
}
