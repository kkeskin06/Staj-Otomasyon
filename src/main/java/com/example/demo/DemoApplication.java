package com.example.demo;
/*
import com.example.demo.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;*/
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@EnableWebSecurity extends WebSecurityConfigurerAdapter
@SpringBootApplication
@ComponentScan(basePackages = {"com.example.demo"})
public class DemoApplication  {
	/*@Autowired
	UserService userService ;*/

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	/*@Configuration
	public class WebConfig
	{
		@Bean
		public WebMvcConfigurer corsConfigurer()
		{
			return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**").allowedOrigins("http://localhost:3000");
				}
			};
		}
	}*/
	/*@Bean
	PasswordEncoder bcryptPasswordEncoder(){
		return new BCryptPasswordEncoder();
	}


	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(daoAuthenticationProvider());
	}
	@Bean
	DaoAuthenticationProvider daoAuthenticationProvider(){
		DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
		daoAuthenticationProvider.setPasswordEncoder(bcryptPasswordEncoder());
		daoAuthenticationProvider.setUserDetailsService(this.userService);
		return daoAuthenticationProvider;
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.csrf().disable()
				.authorizeRequests()
				.antMatchers("/home").hasAnyRole("USER")
				.antMatchers("/Basvuru").permitAll()
				.antMatchers("/addrole").permitAll()
				.antMatchers("/adduser").permitAll()
				.antMatchers("/admin").hasAnyRole("ADMIN")
				.anyRequest().authenticated().and().httpBasic();



	}*/
}