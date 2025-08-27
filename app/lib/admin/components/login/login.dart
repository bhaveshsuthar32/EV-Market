// import 'package:ev_market/view/about_page.dart';
// import 'package:flutter/material.dart';
// import 'package:flutter/widgets.dart';

// class Login extends StatefulWidget {
//   const Login({super.key});

//   @override
//   State<Login> createState() => _LoginState();
// }

// class _LoginState extends State<Login> {
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: Padding(
//         padding: EdgeInsets.all(40),
//         child: Column(
//           children: [
//             Center(
//               child: Container(
//                 // alignment: Alignment.centerRight,
//                 width: 100,
//                 height: 100,
//                 // decoration: BoxDecoration(border: Border.all(width: 1)),
//                 margin: EdgeInsets.fromLTRB(0, 90, 0, 50),
//                 child: ClipOval(
//                   child: Image.network(
//                     "https://cbvalueaddrealty.in/wp-content/uploads/2022/07/electric-vehicle.jpg",
//                     fit: BoxFit.cover,
//                   ),
//                 ),
//               ),
//             ),

//             Container(
//               margin: EdgeInsets.fromLTRB(0, 0, 0, 20),
//               alignment: Alignment.centerLeft,
//               child: Text("Login User", style: TextStyle(fontSize: 30)),
//             ),

//             Form(
              
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   Text("Email"),
//                   SizedBox(height: 10,),
//                   TextFormField(
//                     decoration: InputDecoration(
//                       hintText: "Enter your email",
//                       border: OutlineInputBorder(),
//                     ),

//                     validator: (value) {
//                       if (value == null || value.isEmpty) {
//                         return 'Please enter your email';
//                       }
//                     },
//                   ),

//                   SizedBox(height: 10),

//                   Text("Password"),
//                   SizedBox(height: 10,),
//                   TextFormField(
//                     obscureText: true,
//                     decoration: InputDecoration(
//                       hintText: "Enter your password",
//                       border: OutlineInputBorder(),
//                     ),
//                     validator: (value) {
//                       if (value == null || value.isEmpty) {
//                         return 'Please enter your Password';
//                       }
//                     },
                    
//                   ),
//                   SizedBox(height: 20,),

//                   Center(
//                     child: ElevatedButton(
//                       onPressed: () {
//                         Navigator.push(
//                           context,
//                           MaterialPageRoute(builder: (context) => About_Page()),
//                         );
//                       },
//                       child: Text("Login"),
//                     ),
//                   ),
//                 ],
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }





import 'package:ev_market/user/about/about.dart';
import 'package:flutter/material.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 24),
          child: Column(
            children: [
              const SizedBox(height: 40),
              ClipOval(
                child: Image.network(
                  "https://cbvalueaddrealty.in/wp-content/uploads/2022/07/electric-vehicle.jpg",
                  width: 120,
                  height: 120,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(height: 32),
              const Text(
                "Welcome Back!",
                style: TextStyle(
                  fontSize: 26,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                "Login to continue to EV-Market",
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey[600],
                ),
              ),
              const SizedBox(height: 32),

              /// Form Section
              Form(
                key: _formKey,
                child: Column(
                  children: [
                    _buildInputField(
                      label: "Email",
                      hint: "Enter your email",
                      keyboardType: TextInputType.emailAddress,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter your email';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 16),
                    _buildInputField(
                      label: "Password",
                      hint: "Enter your password",
                      obscureText: true,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter your password';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 24),
                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(12),
                          ),
                        ),
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            Navigator.push(
                              context,
                              MaterialPageRoute(builder: (context) => const About()),
                            );
                          }
                        },
                        child: const Text(
                          "Login",
                          style: TextStyle(fontSize: 16),
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 24),
              TextButton(
                onPressed: () {},
                child: const Text(
                  "Forgot Password?",
                  style: TextStyle(color: Colors.blueAccent),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildInputField({
    required String label,
    required String hint,
    bool obscureText = false,
    TextInputType keyboardType = TextInputType.text,
    String? Function(String?)? validator,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label,
            style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 15)),
        const SizedBox(height: 8),
        TextFormField(
          obscureText: obscureText,
          keyboardType: keyboardType,
          validator: validator,
          decoration: InputDecoration(
            hintText: hint,
            contentPadding: const EdgeInsets.symmetric(
              vertical: 16,
              horizontal: 16,
            ),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            focusedBorder: OutlineInputBorder(
              borderSide: const BorderSide(color: Colors.blueAccent),
              borderRadius: BorderRadius.circular(12),
            ),
          ),
        ),
      ],
    );
  }
}
