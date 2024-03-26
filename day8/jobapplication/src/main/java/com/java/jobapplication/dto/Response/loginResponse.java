package com.java.jobapplication.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class loginResponse {
    @Builder.Default
    private String message="Someting went wrong";
    @Builder.Default
    private String accessToken="";


}
