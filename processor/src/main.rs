#![feature(proc_macro_hygiene, decl_macro)]

use rocket::*;
use rocket_contrib::json;
use rocket_contrib::json::{Json, JsonValue};

use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
struct UrlData {
    url: String,
}

#[get("/info")]
fn info() -> JsonValue {
    json! {{
        "version": env!("CARGO_PKG_VERSION")
    }}
}

#[post("/url", format = "application/json", data = "<data>")]
fn url(data: Json<UrlData>) -> JsonValue {
    println!("URL: {}", data.url);
    json! {{}}
}

fn main() {
    rocket::ignite().mount("/", routes![info, url]).launch();
}
