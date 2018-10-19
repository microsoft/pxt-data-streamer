# Hacking STEM [![Build Status](https://travis-ci.org/Microsoft/pxt-hacking-stem.svg?branch=master)](https://travis-ci.org/Microsoft/pxt-hacking-stem)

Support for [Hacking STEM](https://www.microsoft.com/en-us/education/education-workshop/activity-library.aspx) activities in [micro:bit](https://makecode.microbit.org). For Hacking Stem activities you will need excel add-on Data Streamer as well. To download Data Streamer [click here](https://www.microsoft.com/en-us/download/details.aspx?id=56976)

## Usage

Go to https://makecode.microbit.org, click on the gearwheel menu and select ``Extensions``, search for ``hacking stem`` and select this extension. Once you load the extension you should see a new category named DataStreamer.

## Reference

## ``dataStreamer.writeNumber`` 

The ``||dataStreamer.writeNumber||`` block writes a number to the serial port as a floating point number.

```sig
dataStreamer.writeNumber(1.52, 2);
```

### Parameters

* `value` is the floating point number to write to the serial port
* `decimal digits` is the number of decimal digits to write. Default is 2.

### Example 1
For example,

```blocks
dataStreamer.writeNumber(1.52);
```

writes the following number to serial
1.52

### Example 2
This example reads the analog signal on pin ``P0``, scales it to 3.3v and writes it to serial.

```blocks
let mv = 0
basic.forever(() => {
    mv = pins.analogReadPin(AnalogPin.P0) * 3.3 / 1023
    dataStreamer.writeNumber(mv)
})
```

## ``dataStreamer.writeString`` 

The ``||dataStreamer.writeString||`` block writes a string to the serial port, without starting a new line afterward.

```sig
dataStreamer.writeString(",");
```

## Parameters

* `text` is the string to write to the serial port

## Example: simple serial

This program writes a comma `,` seperated 10.25 to the serial port repeatedly,
without any new lines.

```blocks
basic.forever(() => {
    dataStreamer.writeNumber(10.25);
    dataStreamer.writeString(",");
});
```

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)


## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
