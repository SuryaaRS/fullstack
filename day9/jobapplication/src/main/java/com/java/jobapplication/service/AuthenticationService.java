package com.java.jobapplication.service;

import com.java.jobapplication.dto.Request.ForgotPasswordRequest;
import com.java.jobapplication.dto.Request.RegisterRequest;
import com.java.jobapplication.dto.Request.LoginRequest;
import com.java.jobapplication.dto.Response.BasicsResponse;
import com.java.jobapplication.dto.Response.loginResponse;

public interface AuthenticationService  {
    BasicsResponse<String> register(RegisterRequest registerRequest);

     BasicsResponse<loginResponse> login(LoginRequest loginRequest);

    BasicsResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
}
