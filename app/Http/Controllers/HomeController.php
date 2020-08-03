<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Mail\ThanksMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function Contact(Request $request)
    {
        $input = $request->input();
        Mail::to(env('MAIL_TO_ADDRESS'))->send(new ContactMail($input));
        Mail::to($input['email'])->send(new ThanksMail($input));
        return redirect(route('complete'));
    }
}
