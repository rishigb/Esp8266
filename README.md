# Esp8266

Will be using : http://daflabs.com/esp8266-esp12-breakout-board.html 

# Getting started:
There were a crazy lot of issues when I just tried to connect and get a response from the board, most of them were beacause I was using Arduino Uno to get the communications, which ofcourse won't work because of the board doesn't work on 5V for RX and TX connections.

I had to then order an CP2102 - from Daflabs, after the connections were all successfully done, I finally got the response from the board. This is how the connections are supposed to be:

5V ---> Vin of the break out board.

GND ---> GND.

RX ---> Tx of the board.

TX --->RX of the board.

.--- On the break out board ---.

CHPD --->3.3V.

VCC ---> Vin.

I015 --->GND.

IO02 --->3.3V of CP2102 ( it just needs 3.3V, it doesn't care where it is coming from.).


# Using the ESP8266 break out board

Right after connecting the boards, plug in the CP2102 to your system. In my case, I am using a Mac Machine, you will need to download the drivers for your system from here: https://www.silabs.com/products/mcu/Pages/USBtoUARTBridgeVCPDrivers.aspx 

Once the drivers are installed, you can simply go into the Arduino IDE, select the serial port (in case of Mac , it shows up as "/dev/cu.SLAB_USBtoUART" , it should be similar to this on a linux machine too.

Select NL and CR on the monitor with 9600 baud. For resetting the board, connect RST on the board to the GND for a sec, you will see the blue LED blinking and viola, you are done. You should see "ready"being printed on the screen.

Now all the AT commands should work.

I have followed this instructable to make it all work: http://www.instructables.com/id/Getting-Started-with-the-ESP8266-ESP-12/step6/Setup-the-Communication-parameters/ 

