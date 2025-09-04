import 'package:ev_market/services/api_service.dart';
import 'package:ev_market/user/pages/four-wheeler/ev_car.dart';
import 'package:ev_market/user/pages/two-wheeler/bike.dart';
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String selectedBike = "Bike";
  String selectedCar = "Car";
  String selectedScooter = "Scooter";

  late Future<List<dynamic>> allBikeData;
  late Future<List<dynamic>> bikeUsedFormData;
  late Future<List<dynamic>> bikeUpcomingFormData;
  late Future<List<dynamic>> brandData;
  late Future<List<dynamic>> allScooterData;
  late Future<List<dynamic>> scooterUpcomingData;
  late Future<List<dynamic>> scooterUsedData;
  late Future<List<dynamic>> allCarData;
  late Future<List<dynamic>> carUpcomingData;
  late Future<List<dynamic>> carUsedData;

  @override
  void initState() {
    super.initState();
    allBikeData = ApiService.fetchBikeData();
    bikeUsedFormData = ApiService.fetchBikeUsedData(); // 🔹 Data fetch
    bikeUpcomingFormData = ApiService.fetchBikeUpcomingData();
    brandData = ApiService.fetchBrandData();
    allScooterData = ApiService.fetchScooterData();
    scooterUpcomingData = ApiService.fetchScooterUpcomingData();
    scooterUsedData = ApiService.fetchScooterUsedData();
    allCarData = ApiService.fetchCarData();
    carUpcomingData = ApiService.fetchCarUpcomingData();
    carUsedData = ApiService.fetchCarUsedData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 255, 255, 255),
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
            _section_fourth(),
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
  //     padding: const EdgeInsets.all(6), // outer padding kam
  //     margin: const EdgeInsets.fromLTRB(15, 8, 15, 8),
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
  //             mainAxisSpacing: 8,
  //             crossAxisSpacing: 8,
  //           ),
  //           shrinkWrap: true,
  //           physics: const NeverScrollableScrollPhysics(),
  //           itemCount: data.length,
  //           itemBuilder: (context, index) {
  //             final item = data[index];

  //             return Container(
  //               padding: const EdgeInsets.all(8),
  //               height: 200,
  //               width: 150,
  //               decoration: BoxDecoration(
  //                 color: Colors.white,
  //                 borderRadius: BorderRadius.circular(10),
  //                 boxShadow: [
  //                   BoxShadow(
  //                     color: Colors.black.withOpacity(0.08),
  //                     blurRadius: 6,
  //                     offset: const Offset(2, 4),
  //                   ),
  //                 ],
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
  //                   const SizedBox(height: 4),
  //                   Text(
  //                     item['brand_name'] ?? '',
  //                     textAlign: TextAlign.center, // text center
  //                     style: const TextStyle(
  //                       fontSize: 10.5, // chota font
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

  //   Widget _section_first() {
  //   return Container(
  //     padding: const EdgeInsets.all(6), // outer padding kam
  //     margin: const EdgeInsets.fromLTRB(15, 8, 15, 8),
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
  //             mainAxisSpacing: 8,
  //             crossAxisSpacing: 8,
  //           ),
  //           shrinkWrap: true,
  //           physics: const NeverScrollableScrollPhysics(),
  //           itemCount: data.length,
  //           itemBuilder: (context, index) {
  //             final item = data[index];

  //             return Container(
  //               padding: const EdgeInsets.all(8),
  //               height: 200,
  //               width: 150,
  //               decoration: BoxDecoration(
  //                 color: Colors.white,
  //                 borderRadius: BorderRadius.circular(10),
  //                 boxShadow: [
  //                   BoxShadow(
  //                     color: Colors.black.withOpacity(0.08),
  //                     blurRadius: 6,
  //                     offset: const Offset(2, 4),
  //                   ),
  //                 ],
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
  //                   const SizedBox(height: 4),
  //                   Text(
  //                     item['brand_name'] ?? '',
  //                     textAlign: TextAlign.center, // text center
  //                     style: const TextStyle(
  //                       fontSize: 10.5, // chota font
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

  /// ---- try somthing [ // expriment ]

  // Widget _section_first() {
  //   return Container(
  //     padding: const EdgeInsets.all(6),
  //     margin: const EdgeInsets.fromLTRB(15, 8, 15, 8),
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

  //         return CarouselSlider.builder(
  //           itemCount: data.length,
  //           options: CarouselOptions(
  //             height: 120,
  //             autoPlay: true,
  //             autoPlayInterval: const Duration(seconds: 3),
  //             autoPlayAnimationDuration: const Duration(milliseconds: 800),
  //             viewportFraction: 0.3, // ek row me kitne dikhne chahiye
  //             enlargeCenterPage: true,
  //             enableInfiniteScroll: true,
  //             scrollDirection: Axis.horizontal,
  //           ),
  //           itemBuilder: (context, index, realIndex) {
  //             final item = data[index];
  //             return AnimatedContainer(
  //               duration: const Duration(milliseconds: 500),
  //               margin: const EdgeInsets.symmetric(horizontal: 6, vertical: 10),
  //               decoration: BoxDecoration(
  //                 color: Colors.white,
  //                 borderRadius: BorderRadius.circular(12),
  //                 boxShadow: [
  //                   BoxShadow(
  //                     color: Colors.black.withOpacity(0.1),
  //                     blurRadius: 6,
  //                     offset: const Offset(2, 4),
  //                   ),
  //                 ],
  //               ),
  //               child: Column(
  //                 mainAxisAlignment: MainAxisAlignment.center,
  //                 children: [
  //                   Expanded(
  //                     child: ClipRRect(
  //                       borderRadius: BorderRadius.circular(8),
  //                       child: Image.network(
  //                         item['brand_logo'] ?? '',
  //                         fit: BoxFit.cover, // pura cover karega
  //                         width: double.infinity,
  //                         height: double.infinity,
  //                       ),
  //                     ),
  //                   ),
  //                   const SizedBox(height: 6),
  //                   Text(
  //                     item['brand_name'] ?? '',
  //                     textAlign: TextAlign.center,
  //                     style: const TextStyle(
  //                       fontSize: 11,
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
      padding: const EdgeInsets.only(left: 6, right: 6, top: 15, bottom: 15),
      margin: const EdgeInsets.fromLTRB(15, 8, 15, 8),
      width: double.infinity,
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
          SizedBox(height: 20,),
          FutureBuilder<List<dynamic>>(
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

              return CarouselSlider.builder(
                itemCount: data.length,
                options: CarouselOptions(
                  height: 110,
                  autoPlay: true,
                  autoPlayInterval: const Duration(
                    seconds: 1,
                  ), // 1 second slide
                  autoPlayAnimationDuration: const Duration(milliseconds: 500),
                  viewportFraction: 0.28, // ek row me multiple brands dikhne
                  enableInfiniteScroll: true,
                  scrollDirection: Axis.horizontal,
                ),
                itemBuilder: (context, index, realIndex) {
                  final item = data[index];
                  return Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(0),
                        child: Image.network(
                          item['brand_logo'] ?? '',
                          fit: BoxFit.cover,
                          height: 60,
                          width: 80,
                        ),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        item['brand_name'] ?? '',
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Container(
                        height: 1,
                        width: 50,
                        color: Colors.grey.shade300, // simple line
                      ),
                    ],
                  );
                },
              );
            },
          ),
        ],
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
                      selectedBike = "Bike";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Bike",
                        style: TextStyle(
                          fontWeight: selectedBike == "Bike"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedBike == "Bike"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedBike == "Bike")
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
                      selectedBike = "Upcoming Bike";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Upcoming Bike",
                        style: TextStyle(
                          fontWeight: selectedBike == "Upcoming Bike"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedBike == "Upcoming Bike"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedBike == "Upcoming Bike")
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
                      selectedBike = "Used Bike";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Used Bike",
                        style: TextStyle(
                          fontWeight: selectedBike == "Used Bike"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedBike == "Used Bike"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedBike == "Used Bike")
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

          if (selectedBike == "Bike") _bikeData(),
          if (selectedBike == "Upcoming Bike") _upcomingBikeData(),
          if (selectedBike == "Used Bike") _usedBikeData(),

          SizedBox(height: 30),
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
      width: double.infinity,
      padding: EdgeInsets.all(10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "EV-Scooter",
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
                      selectedScooter = "Scooter";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Scooter",
                        style: TextStyle(
                          fontWeight: selectedScooter == "Scooter"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedScooter == "Scooter"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedScooter == "Scooter")
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
                      selectedScooter = "Upcoming Scooter";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Upcoming Scooter",
                        style: TextStyle(
                          fontWeight: selectedScooter == "Upcoming Scooter"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedScooter == "Upcoming Scooter"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedScooter == "Upcoming Scooter")
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
                      selectedScooter = "Used Scooter";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Used Scooter",
                        style: TextStyle(
                          fontWeight: selectedScooter == "Used Scooter"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedScooter == "Used Scooter"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedScooter == "Used Scooter")
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

          if (selectedScooter == "Scooter") _scooterData(),
          if (selectedScooter == "Upcoming Scooter") _upcomingScooterData(),
          if (selectedScooter == "Used Scooter") _usedScooterData(),

          SizedBox(height: 30),
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

  Widget _section_fourth() {
    return Container(
      // height: 600,
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
                      selectedCar = "Car";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Car",
                        style: TextStyle(
                          fontWeight: selectedCar == "Car"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCar == "Car"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCar == "Car")
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
                      selectedCar = "Upcoming Car";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Upcoming Car",
                        style: TextStyle(
                          fontWeight: selectedCar == "Upcoming Car"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCar == "Upcoming Car"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCar == "Upcoming Car")
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
                      selectedCar = "Used Car";
                    });
                  },
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        "Used Car",
                        style: TextStyle(
                          fontWeight: selectedCar == "Used Car"
                              ? FontWeight.bold
                              : FontWeight.normal,
                          color: selectedCar == "Used Car"
                              ? Colors.blue
                              : Colors.black,
                        ),
                      ),
                      if (selectedCar == "Used Car")
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

          if (selectedCar == "Car") _carData(),
          if (selectedCar == "Upcoming Car") _upcomingCarData(),
          if (selectedCar == "Used Car") _usedCarData(),

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
      height: 240,
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

  Widget _scooterData() {
    return SizedBox(
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: allScooterData,
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

  Widget _upcomingScooterData() {
    return SizedBox(
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: scooterUpcomingData,
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

  Widget _usedScooterData() {
    return SizedBox(
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: scooterUsedData,
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
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: carUpcomingData,
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

  Widget _usedCarData() {
    return SizedBox(
      height: 240,
      child: FutureBuilder<List<dynamic>>(
        future: carUsedData,
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
}
