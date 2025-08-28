module hello::hello;

use std::string::String;

public fun get_message(): String {
    b"Hello, world!".to_string()
}
