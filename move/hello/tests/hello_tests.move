#[test_only]
module hello::hello_tests;

use hello::hello::get_message;

const ETestFailure: u64 = 0;

#[test]
fun test_get_message() {
    let expected_message = b"Hello, world!".to_string();
    let actual_message = get_message();

    assert!(actual_message == expected_message, ETestFailure);
}

#[test]
#[expected_failure(abort_code = ETestFailure)]
fun test_get_message_failure() {
    let wrong_message = b"Goodbye, world!".to_string();
    let actual_message = get_message();

    assert!(actual_message == wrong_message, ETestFailure);
}
