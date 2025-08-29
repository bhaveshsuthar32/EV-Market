import 'package:ev_market/services/api_service.dart';
// import 'package:ev_market/user/about/about.dart';
import 'package:ev_market/user/components/bottom_nav.dart';
// import 'package:ev_market/user/contact/contact_page.dart';
// import 'package:ev_market/admin/dashboard/admin_page.dart';
// import 'package:ev_market/admin/components/login/login.dart';
import 'package:ev_market/user/pages/four-wheeler/ev_car.dart';
import 'package:ev_market/user/pages/two-wheeler/bike.dart';
// import 'package:ev_market/user/pages/two-wheeler/bike_details.dart';
import 'package:flutter/material.dart';
// import 'package:flutter/rendering.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String selectedCategory = "Bike";
  String selectedCategoryCar = "Car";

  late Future<List<dynamic>> allBikeData;
  late Future<List<dynamic>> bikeUsedFormData;
  late Future<List<dynamic>> bikeUpcomingFormData;
  late Future<List<dynamic>> brandData;
  late Future<List<dynamic>> allCarData;

  @override
  void initState() {
    super.initState();
    allBikeData = ApiService.fetchBikeData();
    bikeUsedFormData = ApiService.fetchBikeUsedData(); // 🔹 Data fetch
    bikeUpcomingFormData = ApiService.fetchBikeUpcomingData();
    brandData = ApiService.fetchBrandData();
    allCarData = ApiService.fetchCarData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 255, 255, 255),
      // appBar: AppBar(
      //   leading: Builder(
      //     builder: (context) {
      //       return IconButton(
      //         onPressed: () {
      //           Scaffold.of(context).openDrawer();
      //         },
      //         icon: Icon(Icons.menu),
      //         color: Colors.white,
      //       );
      //     },
      //   ),
      //   actionsPadding: const EdgeInsets.fromLTRB(10, 5, 10, 5),
      //   backgroundColor: const Color.fromARGB(255, 0, 0, 0),

      //   title: const Text("EV-Market", style: TextStyle(color: Colors.white)),
      //   actions: [
      //     IconButton(
      //       onPressed: () {},
      //       icon: Icon(Icons.settings, color: Colors.white),
      //     ),
      //   ],
      // ),




      // drawer: Drawer(
      //   child: ListView(
      //     padding: EdgeInsets.zero,
      //     children: <Widget>[
      //       Container(
      //         // height: 40,
      //         alignment: Alignment.centerLeft,
      //         padding: EdgeInsets.fromLTRB(40, 60, 40, 20),
      //         decoration: BoxDecoration(color: Colors.blue[400]),
      //         child: Text("EV-MARKET"),
      //       ),
      //       ListTile(
      //         leading: TextButton(
      //           style: ButtonStyle(
      //             // ---------- working [ change bgcolor when i am hover button ]
      //           ),
      //           onPressed: () {
      //             Navigator.push(
      //               context,
      //               MaterialPageRoute(builder: (context) => About()),
      //             );
      //           },
      //           child: Text("About Us"),
      //         ),
      //       ),
      //       ListTile(
      //         leading: TextButton(
      //           onPressed: () {
      //             Navigator.push(
      //               context,
      //               MaterialPageRoute(builder: (context) => ContactPage()),
      //             );
      //           },
      //           child: Text("Contact Us"),
      //         ),
      //       ),
      //       ListTile(
      //         leading: TextButton(
      //           onPressed: () {
      //             Navigator.push(
      //               context,
      //               MaterialPageRoute(builder: (context) => Login()),
      //             );
      //           },
      //           child: Text("Login"),
      //         ),
      //       ),
      //       ListTile(
      //         leading: TextButton(
      //           onPressed: () {
      //             Navigator.push(
      //               context,
      //               MaterialPageRoute(builder: (context) => AdminPage()),
      //             );
      //           },
      //           child: Text("Admin"),
      //         ),
      //       ),
      //     ],
      //   ),
      // ),






      // ---------------- New drawer --------
      // drawer: Drawer(
      //   child: Column(
      //     children: [
      //       // 🔹 Profile Header
      //       UserAccountsDrawerHeader(
      //         decoration: const BoxDecoration(
      //           color: Color(0xFF1976D2), // Blue background
      //         ),
      //         accountName: const Text(
      //           "James Martin",
      //           style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
      //         ),
      //         accountEmail: const Text("james012@gmail.com"),
      //         currentAccountPicture: const CircleAvatar(
      //           backgroundImage: NetworkImage(
      //             "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", // profile image
      //           ),
      //         ),
      //       ),

      //       // 🔹 Menu Items
      //       ListTile(
      //         leading: const Icon(Icons.info_outline),
      //         title: const Text("About Us"),
      //         onTap: () {
      //           Navigator.push(
      //             context,
      //             MaterialPageRoute(builder: (context) => const About()),
      //           );
      //         },
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.contact_page_outlined),
      //         title: const Text("Contact Us"),
      //         onTap: () {
      //           Navigator.push(
      //             context,
      //             MaterialPageRoute(builder: (context) => const ContactPage()),
      //           );
      //         },
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.login),
      //         title: const Text("Login"),
      //         onTap: () {
      //           Navigator.push(
      //             context,
      //             MaterialPageRoute(builder: (context) => const Login()),
      //           );
      //         },
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.admin_panel_settings),
      //         title: const Text("Admin"),
      //         onTap: () {
      //           Navigator.push(
      //             context,
      //             MaterialPageRoute(builder: (context) => const AdminPage()),
      //           );
      //         },
      //       ),

      //       const Spacer(),

      //       // 🔹 Logout / Settings Bottom Button
      //       Padding(
      //         padding: const EdgeInsets.all(12.0),
      //         child: ElevatedButton.icon(
      //           style: ElevatedButton.styleFrom(
      //             minimumSize: const Size(double.infinity, 50),
      //             backgroundColor: Colors.blue[700],
      //             shape: RoundedRectangleBorder(
      //               borderRadius: BorderRadius.circular(12),
      //             ),
      //           ),
      //           onPressed: () {
      //             Navigator.pop(context);
      //           },
      //           icon: const Icon(Icons.logout, color: Colors.white),
      //           label: const Text(
      //             "Logout",
      //             style: TextStyle(color: Colors.white),
      //           ),
      //         ),
      //       ),
      //     ],
      //   ),
      // ),

      body: SingleChildScrollView(
        padding: const EdgeInsets.all(0),
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            _top_screen_image(),
            const SizedBox(height: 10),
            _section_first(),
            const SizedBox(height: 10),
            _section_second(),
            const SizedBox(height: 10),
            _section_third(),
            const SizedBox(height: 20),
      
              ],
          
        ),
        
      ),

    );
  }

  Widget _top_screen_image() {
    final List<String> imageUrls = [
      'https://cbvalueaddrealty.in/wp-content/uploads/2022/07/electric-vehicle.jpg',
      'https://static.toiimg.com/thumb/msid-88551970,width-1280,height-720,resizemode-4/.jpg',
      'https://cbvalueaddrealty.in/wp-content/uploads/2022/07/electric-vehicle.jpg',
    ];

    return SizedBox(
      height: 220,
      child: PageView.builder(
        itemCount: imageUrls.length,
        itemBuilder: (context, index) {
          return Stack(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: Image.network(
                  imageUrls[index],
                  fit: BoxFit.cover,
                  width: double.infinity,
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  // Widget _section_first() {
  //   return Container(
  //     padding: const EdgeInsets.all(10),
  //     margin: EdgeInsets.fromLTRB(20, 10, 20, 10),
  //     width: double.infinity,

  //     child: FutureBuilder<List<dynamic>>(
  //       future: brandData,
  //       builder: (context, snapshot) {
  //         if (snapshot.connectionState == ConnectionState.waiting) {
  //           return const Center(child: CircularProgressIndicator());
  //         }

  //         if (snapshot.hasError) {
  //           return Center(child: Text("Error: ${snapshot.error}"));
  //         }

  //         if (!snapshot.hasData || snapshot.data!.isEmpty) {
  //           return const Center(child: Text("No data found"));
  //         }

  //         final data = snapshot.data!;

  //         return GridView.builder(
  //           gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
  //             crossAxisCount: 4,
  //             mainAxisSpacing: 10,
  //             crossAxisSpacing: 10,
  //           ),
  //           shrinkWrap: true,
  //           physics: NeverScrollableScrollPhysics(),
  //           itemCount: data.length,
  //           itemBuilder: (context, index) {
  //             final item = data[index];

  //             return Container(
  //               padding: EdgeInsets.all(10),
  //               height: 200,
  //               width: 150,
  //               decoration: BoxDecoration(
  //                 color: Colors.white,
  //                 borderRadius: BorderRadius.circular(10),
  //                 border: Border.all(
  //                   width: 1,
  //                   color: Colors.black87,
  //                   style: BorderStyle.solid,
  //                 ),
  //               ),
  //               child: Column(
  //                 mainAxisAlignment: MainAxisAlignment.center,
  //                 children: [
  //                   Expanded(
  //                     child: Image.network(
  //                       item['brand_logo'] ?? '',
  //                       height: 70,
  //                       width: 70,
  //                       fit: BoxFit.cover,
  //                     ),
  //                   ),

  //                   SizedBox(height: 2),
  //                   Text(
  //                     item['brand_name'] ?? '',
  //                     style: TextStyle(
  //                       fontSize: 12,
  //                       fontWeight: FontWeight.bold,
  //                     ),
  //                   ),
  //                 ],
  //               ),
  //             );
  //           },
  //         );
  //       },
  //     ),
  //   );
  // }

  Widget _section_first() {
    return Container(
      padding: const EdgeInsets.all(6), // outer padding kam
      margin: const EdgeInsets.fromLTRB(15, 8, 15, 8),
      width: double.infinity,
      child: FutureBuilder<List<dynamic>>(
        future: brandData,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text("Error: ${snapshot.error}"));
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("No data found"));
          }

          final data = snapshot.data!;

          return GridView.builder(
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 4,
              mainAxisSpacing: 8,
              crossAxisSpacing: 8,
            ),
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: data.length,
            itemBuilder: (context, index) {
              final item = data[index];

              return Container(
                padding: const EdgeInsets.all(8),
                height: 200,
                width: 150,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(10),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.08),
                      blurRadius: 6,
                      offset: const Offset(2, 4),
                    ),
                  ],
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Expanded(
                      child: Image.network(
                        item['brand_logo'] ?? '',
                        height: 70,
                        width: 70,
                        fit: BoxFit.cover,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      item['brand_name'] ?? '',
                      textAlign: TextAlign.center, // text center
                      style: const TextStyle(
                        fontSize: 10.5, // chota font
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              );
            },
          );
        },
      ),
    );
  }

  Widget _section_second() {
    return Container(
      width: double.infinity,
      padding: EdgeInsets.all(10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "EV-Bikes",
            textAlign: TextAlign.left,
            style: TextStyle(
              color: const Color.fromARGB(255, 0, 0, 0),
              fontWeight: FontWeight.w600,
              fontSize: 18,
            ),
            textDirection: TextDirection.ltr,
          ),

          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.all(8.0),
                child: GestureDetector(
                  onTap: () {
                    setState(() {
                      selectedCategory = "Bike";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Bike",
                        style: TextStyle(
                          fontWeight: selectedCategory == "Bike"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCategory == "Bike"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCategory == "Bike")
                        Container(
                          margin: EdgeInsets.only(top: 4),
                          height: 3,
                          width: 30,
                          decoration: BoxDecoration(
                            color: Colors.blue,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: GestureDetector(
                  onTap: () {
                    setState(() {
                      selectedCategory = "Upcoming Bike";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Upcoming Bike",
                        style: TextStyle(
                          fontWeight: selectedCategory == "Upcoming Bike"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCategory == "Upcoming Bike"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCategory == "Upcoming Bike")
                        Container(
                          margin: EdgeInsets.only(top: 4),
                          height: 3,
                          width: 50,
                          decoration: BoxDecoration(
                            color: Colors.blue,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: GestureDetector(
                  onTap: () {
                    setState(() {
                      selectedCategory = "Used Bike";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Used Bike",
                        style: TextStyle(
                          fontWeight: selectedCategory == "Used Bike"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCategory == "Used Bike"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCategory == "Used Bike")
                        Container(
                          margin: EdgeInsets.only(top: 4),
                          height: 3,
                          width: 40,
                          decoration: BoxDecoration(
                            color: Colors.blue,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ],
          ),

          SizedBox(height: 20),

          if (selectedCategory == "Bike") _bikeData(),
          if (selectedCategory == "Upcoming Bike") _upcomingBikeData(),
          if (selectedCategory == "Used Bike") _usedBikeData(),

          SizedBox(height: 30),

          // Center(
          //   child: TextButton(
          //     onPressed: () {
          //       Navigator.push(
          //         context,
          //         MaterialPageRoute(builder: (context) => Bike()),
          //       );
          //     },
          //     style: ButtonStyle(
          //       backgroundColor: WidgetStateProperty.all<Color>(Colors.black),
          //     ),
          //     child: Text("View All Bike"),
          //   ),
          // ),
          Center(
            child: ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const Bike()),
                );
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color.fromARGB(
                  255,
                  37,
                  37,
                  38,
                ), // 🔹 Modern blue theme
                padding: const EdgeInsets.symmetric(
                  horizontal: 25,
                  vertical: 8,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20), // 🔹 Rounded corners
                ),
                elevation: 3,
              ),
              child: const Text(
                "View All",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _section_third() {
    return Container(
      height: 600,
      width: double.infinity,
      padding: EdgeInsets.all(10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "EV-Car",
            textAlign: TextAlign.left,
            style: TextStyle(
              color: const Color.fromARGB(255, 0, 0, 0),
              fontWeight: FontWeight.w600,
              fontSize: 18,
            ),
            textDirection: TextDirection.ltr,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: EdgeInsets.all(8.0),
                child: GestureDetector(
                  onTap: () {
                    setState(() {
                      selectedCategoryCar = "Car";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Car",
                        style: TextStyle(
                          fontWeight: selectedCategoryCar == "Car"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCategoryCar == "Car"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCategoryCar == "Car")
                        Container(
                          margin: EdgeInsets.only(top: 4),
                          height: 3,
                          width: 30,
                          decoration: BoxDecoration(
                            color: Colors.blue,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: GestureDetector(
                  onTap: () {
                    setState(() {
                      selectedCategoryCar = "Upcoming Car";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Upcoming Car",
                        style: TextStyle(
                          fontWeight: selectedCategoryCar == "Upcoming Car"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCategoryCar == "Upcoming Car"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCategoryCar == "Upcoming Car")
                        Container(
                          margin: EdgeInsets.only(top: 4),
                          height: 3,
                          width: 50,
                          decoration: BoxDecoration(
                            color: Colors.blue,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(8.0),
                child: GestureDetector(
                  onTap: () {
                    setState(() {
                      selectedCategoryCar = "Used Car";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Used Car",
                        style: TextStyle(
                          fontWeight: selectedCategoryCar == "Used Car"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCategoryCar == "Used Car"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCategoryCar == "Used Car")
                        Container(
                          margin: EdgeInsets.only(top: 4),
                          height: 3,
                          width: 40,
                          decoration: BoxDecoration(
                            color: Colors.blue,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ],
          ),

          SizedBox(height: 20),

          if (selectedCategoryCar == "Car") _carData(),
          if (selectedCategoryCar == "Upcoming Car") _upcomingCarData(),
          if (selectedCategoryCar == "Used Car") _usedCarData(),

          SizedBox(height: 30),
          // Center(
          //   child: ElevatedButton(
          //     onPressed: () {
          //       Navigator.push(
          //         context,
          //         MaterialPageRoute(builder: (context) => ContactPage()),
          //       );
          //     },
          //     child: Text("View All"),
          //     style: ButtonStyle(
          //       backgroundColor: WidgetStateProperty.all<Color>(Colors.black38),
          //     ),
          //   ),
          // ),

           Center(
            child: ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => const EvCar()),
                );
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color.fromARGB(
                  255,
                  37,
                  37,
                  38,
                ), // 🔹 Modern blue theme
                padding: const EdgeInsets.symmetric(
                  horizontal: 25,
                  vertical: 8,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20), // 🔹 Rounded corners
                ),
                elevation: 3,
              ),
              child: const Text(
                "View All",
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // Widget _bikeData() {
  //   return SizedBox(
  //     height: 240,
  //     child: ListView(
  //       scrollDirection: Axis.horizontal,
  //       padding: EdgeInsets.symmetric(horizontal: 10),
  //       children: [
  //         // EV Card
  //         Container(
  //           width: 160,
  //           margin: EdgeInsets.only(right: 12),
  //           decoration: BoxDecoration(
  //             color: Colors.white,
  //             borderRadius: BorderRadius.circular(4),
  //             boxShadow: [
  //               BoxShadow(
  //                 color: Colors.black12,
  //                 blurRadius: 4,
  //                 offset: Offset(2, 2),
  //               ),
  //             ],
  //           ),
  //           child: Column(
  //             children: [
  //               // 🟩 Image takes 70% of card height
  //               Expanded(
  //                 flex: 7,
  //                 child: ClipRRect(
  //                   borderRadius: BorderRadius.vertical(
  //                     top: Radius.circular(4),
  //                   ),
  //                   child: Image.network(
  //                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
  //                     width: double.infinity,
  //                     fit: BoxFit.cover,
  //                   ),
  //                 ),
  //               ),

  //               // 🟦 Text (30% of height)
  //               Expanded(
  //                 flex: 3,
  //                 child: Container(
  //                   padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
  //                   width: double.infinity,
  //                   decoration: BoxDecoration(
  //                     borderRadius: BorderRadius.vertical(
  //                       bottom: Radius.circular(4),
  //                     ),
  //                     color: Colors.white,
  //                   ),
  //                   child: Column(
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  //                     children: [
  //                       Text(
  //                         "Oben Rorr",
  //                         style: TextStyle(
  //                           fontWeight: FontWeight.w600,
  //                           fontSize: 14.5,
  //                           color: Colors.black,
  //                         ),
  //                         maxLines: 1,
  //                         overflow: TextOverflow.ellipsis,
  //                       ),
  //                       Text(
  //                         "₹1,50,000",
  //                         style: TextStyle(
  //                           fontSize: 13.5,
  //                           fontWeight: FontWeight.w500,
  //                           color: Colors.green[800],
  //                         ),
  //                       ),
  //                     ],
  //                   ),
  //                 ),
  //               ),
  //             ],
  //           ),
  //         ),

  //         // 👉 Repeat for other bikes (same layout)
  //         Container(
  //           width: 160,
  //           margin: EdgeInsets.only(right: 12),
  //           decoration: BoxDecoration(
  //             color: Colors.white,
  //             borderRadius: BorderRadius.circular(4),
  //             boxShadow: [
  //               BoxShadow(
  //                 color: Colors.black12,
  //                 blurRadius: 4,
  //                 offset: Offset(2, 2),
  //               ),
  //             ],
  //           ),
  //           child: Column(
  //             children: [
  //               Expanded(
  //                 flex: 7,
  //                 child: ClipRRect(
  //                   borderRadius: BorderRadius.vertical(
  //                     top: Radius.circular(4),
  //                   ),
  //                   child: Image.network(
  //                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
  //                     width: double.infinity,
  //                     fit: BoxFit.cover,
  //                   ),
  //                 ),
  //               ),
  //               Expanded(
  //                 flex: 3,
  //                 child: Container(
  //                   padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
  //                   width: double.infinity,
  //                   child: Column(
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  //                     children: [
  //                       Text(
  //                         "Hop Oxo",
  //                         style: TextStyle(
  //                           fontWeight: FontWeight.w600,
  //                           fontSize: 14.5,
  //                         ),
  //                         maxLines: 1,
  //                         overflow: TextOverflow.ellipsis,
  //                       ),
  //                       Text(
  //                         "₹1,40,000",
  //                         style: TextStyle(
  //                           fontSize: 13.5,
  //                           color: Colors.green[800],
  //                           fontWeight: FontWeight.w500,
  //                         ),
  //                       ),
  //                     ],
  //                   ),
  //                 ),
  //               ),
  //             ],
  //           ),
  //         ),

  //         Container(
  //           width: 160,
  //           margin: EdgeInsets.only(right: 12),
  //           decoration: BoxDecoration(
  //             color: Colors.white,
  //             borderRadius: BorderRadius.circular(4),
  //             boxShadow: [
  //               BoxShadow(
  //                 color: Colors.black12,
  //                 blurRadius: 4,
  //                 offset: Offset(2, 2),
  //               ),
  //             ],
  //           ),
  //           child: Column(
  //             children: [
  //               Expanded(
  //                 flex: 7,
  //                 child: ClipRRect(
  //                   borderRadius: BorderRadius.vertical(
  //                     top: Radius.circular(4),
  //                   ),
  //                   child: Image.network(
  //                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
  //                     width: double.infinity,
  //                     fit: BoxFit.cover,
  //                   ),
  //                 ),
  //               ),
  //               Expanded(
  //                 flex: 3,
  //                 child: Container(
  //                   padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
  //                   width: double.infinity,
  //                   child: Column(
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  //                     children: [
  //                       Text(
  //                         "Hop Oxo",
  //                         style: TextStyle(
  //                           fontWeight: FontWeight.w600,
  //                           fontSize: 14.5,
  //                         ),
  //                         maxLines: 1,
  //                         overflow: TextOverflow.ellipsis,
  //                       ),
  //                       Text(
  //                         "₹1,60,000",
  //                         style: TextStyle(
  //                           fontSize: 13.5,
  //                           color: Colors.green[800],
  //                           fontWeight: FontWeight.w500,
  //                         ),
  //                       ),
  //                     ],
  //                   ),
  //                 ),
  //               ),
  //             ],
  //           ),
  //         ),
  //       ],
  //     ),
  //   );
  // }

  Widget _bikeData() {
    return SizedBox(
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: allBikeData,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text("Error: ${snapshot.error}"));
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("No data found"));
          }

          final data = snapshot.data!;

          return ListView.builder(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.symmetric(horizontal: 10),
            itemCount: data.length,
            itemBuilder: (context, index) {
              final item = data[index];

              return Container(
                width: 160,
                margin: EdgeInsets.only(right: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(4),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black12,
                      blurRadius: 4,
                      offset: Offset(2, 2),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    Expanded(
                      flex: 7,
                      child: ClipRRect(
                        borderRadius: BorderRadius.vertical(
                          top: Radius.circular(4),
                        ),
                        child: Image.network(
                          item['img1'] ?? '',
                          width: double.infinity,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Expanded(
                      flex: 3,
                      child: Container(
                        padding: EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 6,
                        ),
                        width: double.infinity,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Text(
                              item['vehicle_name'] ?? '',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                fontSize: 14.5,
                              ),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                            ),
                            Text(
                              item['showroom_price'] ?? '',
                              style: TextStyle(
                                fontSize: 13.5,
                                color: Colors.green[800],
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              );
            }, //// -------------
          );
        },
      ),
    );
  }

  Widget _upcomingBikeData() {
    return SizedBox(
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: bikeUpcomingFormData,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text("Error: ${snapshot.error}"));
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("No data found"));
          }

          final data = snapshot.data!;

          return ListView.builder(
            scrollDirection: Axis.horizontal,
            padding: EdgeInsets.symmetric(horizontal: 10),
            itemCount: data.length,
            itemBuilder: (context, index) {
              final item = data[index];

              return Container(
                width: 160,
                margin: EdgeInsets.only(right: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(4),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black12,
                      blurRadius: 4,
                      offset: Offset(2, 2),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    Expanded(
                      flex: 7,
                      child: ClipRRect(
                        borderRadius: BorderRadius.vertical(
                          top: Radius.circular(4),
                        ),
                        child: Image.network(
                          item['img1'] ?? '',
                          width: double.infinity,
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Expanded(
                      flex: 3,
                      child: Container(
                        padding: EdgeInsets.symmetric(
                          horizontal: 10,
                          vertical: 6,
                        ),
                        width: double.infinity,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Text(
                              item['vehicle_name'] ?? '',
                              style: TextStyle(
                                fontWeight: FontWeight.w600,
                                fontSize: 14.5,
                              ),
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                            ),
                            Text(
                              item['showroom_price'] ?? '',
                              style: TextStyle(
                                fontSize: 13.5,
                                color: Colors.green[800],
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              );
            }, //// -------------
          );
        },
      ),
    );
  }

  Widget _usedBikeData() {
    return SizedBox(
      height: 300,
      child: FutureBuilder<List<dynamic>>(
        future: bikeUsedFormData, // 🔹 Correct reference
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text("Error: ${snapshot.error}"));
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("No data found"));
          }

          final data = snapshot.data!;

          return ListView.builder(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 8),
            itemCount: data.length,
            itemBuilder: (context, index) {
              final item = data[index];

              return Container(
                width: 200,
                margin: const EdgeInsets.only(right: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: Border.all(color: Colors.grey.shade300),
                  borderRadius: BorderRadius.circular(10),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.15),
                      blurRadius: 4,
                      offset: const Offset(0, 2),
                    ),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ClipRRect(
                      borderRadius: const BorderRadius.vertical(
                        top: Radius.circular(10),
                      ),
                      child: Image.network(
                        item['img1'] ?? '',
                        height: 150,
                        width: double.infinity,
                        fit: BoxFit.cover,
                        errorBuilder: (context, error, stackTrace) {
                          return Container(
                            height: 150,
                            color: Colors.grey[300],
                            alignment: Alignment.center,
                            child: const Icon(
                              Icons.image_not_supported,
                              size: 40,
                            ),
                          );
                        },
                      ),
                    ),
                    const SizedBox(height: 10),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8),
                      child: Text(
                        item['vehicle_name'] ?? '',
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8),
                      child: Text(
                        item['showroom_price'] ?? '',
                        style: const TextStyle(
                          color: Colors.green,
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          );
        },
      ),
    );
  }

  // Widget _carData() {
  //   return SizedBox(
  //     height: 240,

  //     child: ListView(
  //       scrollDirection: Axis.horizontal,
  //       padding: EdgeInsets.symmetric(horizontal: 10),
  //       children: [
  //         // EV Card
  //         Container(
  //           width: 160,
  //           margin: EdgeInsets.only(right: 12),
  //           decoration: BoxDecoration(
  //             color: Colors.white,
  //             borderRadius: BorderRadius.circular(4),
  //             boxShadow: [
  //               BoxShadow(
  //                 color: Colors.black12,
  //                 blurRadius: 4,
  //                 offset: Offset(2, 2),
  //               ),
  //             ],
  //           ),
  //           child: Column(
  //             children: [
  //               // 🟩 Image takes 70% of card height
  //               Expanded(
  //                 flex: 7,
  //                 child: ClipRRect(
  //                   borderRadius: BorderRadius.vertical(
  //                     top: Radius.circular(4),
  //                   ),
  //                   child: Image.network(
  //                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
  //                     width: double.infinity,
  //                     fit: BoxFit.cover,
  //                   ),
  //                 ),
  //               ),

  //               // 🟦 Text (30% of height)
  //               Expanded(
  //                 flex: 3,
  //                 child: Container(
  //                   padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
  //                   width: double.infinity,
  //                   decoration: BoxDecoration(
  //                     borderRadius: BorderRadius.vertical(
  //                       bottom: Radius.circular(4),
  //                     ),
  //                     color: Colors.white,
  //                   ),
  //                   child: Column(
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  //                     children: [
  //                       Text(
  //                         "Oben Rorr",
  //                         style: TextStyle(
  //                           fontWeight: FontWeight.w600,
  //                           fontSize: 14.5,
  //                           color: Colors.black,
  //                         ),
  //                         maxLines: 1,
  //                         overflow: TextOverflow.ellipsis,
  //                       ),
  //                       Text(
  //                         "₹1,50,000",
  //                         style: TextStyle(
  //                           fontSize: 13.5,
  //                           fontWeight: FontWeight.w500,
  //                           color: Colors.green[800],
  //                         ),
  //                       ),
  //                     ],
  //                   ),
  //                 ),
  //               ),
  //             ],
  //           ),
  //         ),

  //     //     // 👉 Repeat for other bikes (same layout)
  //         Container(
  //           width: 160,
  //           margin: EdgeInsets.only(right: 12),
  //           decoration: BoxDecoration(
  //             color: Colors.white,
  //             borderRadius: BorderRadius.circular(4),
  //             boxShadow: [
  //               BoxShadow(
  //                 color: Colors.black12,
  //                 blurRadius: 4,
  //                 offset: Offset(2, 2),
  //               ),
  //             ],
  //           ),
  //           child: Column(
  //             children: [
  //               Expanded(
  //                 flex: 7,
  //                 child: ClipRRect(
  //                   borderRadius: BorderRadius.vertical(
  //                     top: Radius.circular(4),
  //                   ),
  //                   child: Image.network(
  //                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
  //                     width: double.infinity,
  //                     fit: BoxFit.cover,
  //                   ),
  //                 ),
  //               ),
  //               Expanded(
  //                 flex: 3,
  //                 child: Container(
  //                   padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
  //                   width: double.infinity,
  //                   child: Column(
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  //                     children: [
  //                       Text(
  //                         "Hop Oxo",
  //                         style: TextStyle(
  //                           fontWeight: FontWeight.w600,
  //                           fontSize: 14.5,
  //                         ),
  //                         maxLines: 1,
  //                         overflow: TextOverflow.ellipsis,
  //                       ),
  //                       Text(
  //                         "₹1,40,000",
  //                         style: TextStyle(
  //                           fontSize: 13.5,
  //                           color: Colors.green[800],
  //                           fontWeight: FontWeight.w500,
  //                         ),
  //                       ),
  //                     ],
  //                   ),
  //                 ),
  //               ),
  //             ],
  //           ),
  //         ),

  //         Container(
  //           width: 160,
  //           margin: EdgeInsets.only(right: 12),
  //           decoration: BoxDecoration(
  //             color: Colors.white,
  //             borderRadius: BorderRadius.circular(4),
  //             boxShadow: [
  //               BoxShadow(
  //                 color: Colors.black12,
  //                 blurRadius: 4,
  //                 offset: Offset(2, 2),
  //               ),
  //             ],
  //           ),
  //           child: Column(
  //             children: [
  //               Expanded(
  //                 flex: 7,
  //                 child: ClipRRect(
  //                   borderRadius: BorderRadius.vertical(
  //                     top: Radius.circular(4),
  //                   ),
  //                   child: Image.network(
  //                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
  //                     width: double.infinity,
  //                     fit: BoxFit.cover,
  //                   ),
  //                 ),
  //               ),
  //               Expanded(
  //                 flex: 3,
  //                 child: Container(
  //                   padding: EdgeInsets.symmetric(horizontal: 10, vertical: 6),
  //                   width: double.infinity,
  //                   child: Column(
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  //                     children: [
  //                       Text(
  //                         "Hop Oxo",
  //                         style: TextStyle(
  //                           fontWeight: FontWeight.w600,
  //                           fontSize: 14.5,
  //                         ),
  //                         maxLines: 1,
  //                         overflow: TextOverflow.ellipsis,
  //                       ),
  //                       Text(
  //                         "₹1,60,000",
  //                         style: TextStyle(
  //                           fontSize: 13.5,
  //                           color: Colors.green[800],
  //                           fontWeight: FontWeight.w500,
  //                         ),
  //                       ),
  //                     ],
  //                   ),
  //                 ),
  //               ),
  //             ],
  //           ),
  //         ),
  //       ],
  //     ),
  //   );
  // }

  Widget _carData() {
    return SizedBox(
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: allCarData,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          if (snapshot.hasError) {
            return Center(child: Text("Error: ${snapshot.error}"));
          }

          if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return const Center(child: Text("No data found"));
          }

          final data = snapshot.data!;

          return ListView.builder(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.symmetric(horizontal: 8),
            itemCount: data.length,
            itemBuilder: (context, index) {
              final item = data[index];
              return Container(
                width: 180,
                margin: const EdgeInsets.only(right: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: Border.all(color: Colors.grey.shade300),
                  borderRadius: BorderRadius.circular(10),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.withOpacity(0.15),
                      blurRadius: 4,
                      offset: const Offset(0, 2),
                    ),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ClipRRect(
                      borderRadius: const BorderRadius.vertical(
                        top: Radius.circular(10),
                      ),
                      child: Image.network(
                        item['img1'] ?? '',
                        height: 150,
                        width: double.infinity,
                        fit: BoxFit.cover,
                        errorBuilder: (context, error, stackTrace) {
                          return Container(
                            height: 150,
                            color: Colors.grey[300],
                            alignment: Alignment.center,
                            child: const Icon(
                              Icons.image_not_supported,
                              size: 40,
                            ),
                          );
                        },
                      ),
                    ),
                    const SizedBox(height: 10),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8),
                      child: Text(
                        item['vehicle_name'] ?? '',
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        ),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 8),
                      child: Text(
                        item['showroom_price'] ?? '',
                        style: const TextStyle(
                          color: Colors.green,
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          );
        },
      ),
    );
  }

  Widget _upcomingCarData() {
    return SizedBox(
      height: 300,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          Container(
            height: double.infinity,
            padding: EdgeInsets.all(5),
            child: Column(
              children: [
                Container(
                  child: Image.network(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
                  ),
                ),
                Row(
                  children: [
                    Text("Revolt RV400", textAlign: TextAlign.left),
                    Text("₹1,39,000", textAlign: TextAlign.right),
                  ],
                ),
              ],
            ),
          ),

          Container(
            height: double.infinity,
            padding: EdgeInsets.all(5),
            child: Column(
              children: [
                Container(
                  child: Image.network(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
                  ),
                ),
                Row(
                  children: [
                    Text("Tork Kratos R	", textAlign: TextAlign.left),
                    Text("₹1,67,000", textAlign: TextAlign.right),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _usedCarData() {
    return SizedBox(
      height: 300,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          Container(
            height: double.infinity,
            padding: EdgeInsets.all(5),
            child: Column(
              children: [
                Container(
                  child: Image.network(
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNcRMbvBXErRBrXiz13yBh5UZgs7YcTpJUEg&s",
                  ),
                ),
                Row(
                  children: [
                    Text("Kabira KM3000	", textAlign: TextAlign.left),
                    Text("₹1,65,000", textAlign: TextAlign.right),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
