# Hacking STEM [![Build Status](https://travis-ci.org/Microsoft/pxt-hacking-stem.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-hacking-stem)

Support for [Hacking STEM](https://www.microsoft.com/en-us/education/education-workshop/activity-library.aspx) activities in [micro:bit](https://makecode.microbit.org). For Hacking Stem activities you will need to enable the Data Streamer Add-in in Excel. For information on enabling Data Streamer, [click here](https://aka.ms/data-streamer). This extension helps build the code to emit serial data in the format required by Data Streamer.

## Usage

Go to https://makecode.microbit.org, click on the gearwheel menu and select ``Extensions``, search for ``hacking stem`` and select this extension. Once you load the extension you should see a new category named **DataStreamer**. THe Hacking Stem extension sets the baud rate for the serial output to 9600 as required by data streamer add-on in excel.

Following are the API reference:

## writeNumber

The ``||dataStreamer.writeNumber||`` block writes a number to the serial port as a floating point number.

```sig
dataStreamer.writeNumber(1.52, 2);
```

### Parameters

* `value` is the floating point number to write to the serial port
* `decimal digits` is the number of decimal digits to write. Default is 2.

### Example 1

A simple write number.

```blocks
dataStreamer.writeNumber(1.52);
```

writes the number `1.52` to serial.

### Example 2

This example reads the analog signal on pin ``P0``, scales it to 3.3v and writes it to serial as decimal with 4 digit precision.

```blocks
let mv = 0
basic.forever(() => {
    mv = pins.analogReadPin(AnalogPin.P0) * 3.3 / 1023
    dataStreamer.writeNumber(mv,4)
})
```

## writeLine

The ``||dataStreamer.writeString||`` block writes a new line to the serial port.

```sig
dataStreamer.writeLine();
```

### Example: Writing values in a loop

This program writes a series of accererlation values to the serial port repeatedly. 

```blocks
basic.forever(function () {
    dataStreamer.writeNumber(input.acceleration(Dimension.X))
    dataStreamer.writeLine()
})
```

## writeString

The ``||dataStreamer.writeString||`` block writes a string to the serial port, without starting a new line afterward.

```sig
dataStreamer.writeString(",");
```

### Parameters
* `text` is the string to write to the serial port

### Example: Writing comma seperated values in a loop

This program writes a comma `,` seperated x,y,z acceleration values to the serial port repeatedly.

```blocks
basic.forever(function () {
    dataStreamer.writeNumber(input.acceleration(Dimension.X))
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(input.acceleration(Dimension.Y))
    dataStreamer.writeString(",")
    dataStreamer.writeNumber(input.acceleration(Dimension.Z))
    dataStreamer.writeLine()
})
```

## writeNumberArray

The ``||dataStreamer.writeNumberArray||`` block writes an array of numbers to the serial port as a comma seperated values, without starting a new line afterward.

```sig
dataStreamer.writeNumberArray([0,1,2]);
```

### Parameters

* `text` is the string to write to the serial port

### Example: Writing comma seperated values in a loop

This program writes a comma `,` seperated x,y,z acceleration values to the serial port repeatedly. 

```blocks
let acc: number[] = []
basic.forever(function () {
    acc[0] = input.acceleration(Dimension.X)
    acc[1] = input.acceleration(Dimension.Y)
    acc[2] = input.acceleration(Dimension.Z)
    dataStreamer.writeNumberArray(acc)
    dataStreamer.writeLine()
})
```

## setBaudRate

The ``||dataStreamer.setBaudRate||`` sets the baud rate. Default is 9600 (this is the baud rate used by Excel Data Streamer).

```sig
dataStreamer.setBaudRate(9600);
```

### Parameters

* `rate` is the number for the baud rate

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
