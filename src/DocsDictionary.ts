const titleStart: string = "Click to open ";
const titleEnd: string = " documentation";

// Listed by topic, and then by alphabetical order
export const stringDictionary: Record<string, string> = {
    /* WPILib */
    "": `[${titleStart}${titleEnd}]()`,

    // Dashboards
    "Field2d": `[${titleStart}Field2d${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/glass/field2d-widget.html)`,
    "Mechanism2d": `[${titleStart}Mechanism2d${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/glass/mech2d-widget.html)`,
    
    // Telemetry
    "DataLogManager": `[${titleStart}DataLogManager${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/telemetry/datalog.html)`,
    "SmartDashboard": `[${titleStart}SmartDashboard${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/smartdashboard/index.html)`, // SmartDashboard is deprecated and will be removed for 2027

    // Units
    "Angle": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "AngularAcceleration": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "AngularMomentum": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "AngularVelocity": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Current": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Distance": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Energy": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Force": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Frequency": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "LinearAcceleration": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "LinearMomentum": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "LinearVelocity": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Mass": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "MomentOfInertia": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    
    // Command-Based Programming
    "Command": `[${titleStart}Command${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html)`,
    "CommandJoystick": `[${titleStart}HID Factories${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/binding-commands-to-triggers.html#hid-factories)`,
    "CommandPS4Controller": `[${titleStart}HID Factories${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/binding-commands-to-triggers.html#hid-factories)`,
    "CommandScheduler": `[${titleStart}CommandScheduler${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/command-scheduler.html)`,
    "CommandXboxController": `[${titleStart}HID Factories${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/binding-commands-to-triggers.html#hid-factories)`,
    
    // NetworkTables
    "GenericEntry": `[${titleStart}Generic${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#using-genericentry-genericpublisher-and-genericsubscriber)`,
    "GenericPublisher": `[${titleStart}Generic${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#using-genericentry-genericpublisher-and-genericsubscriber)`,
    "GenericSubscriber": `[${titleStart}Generic${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#using-genericentry-genericpublisher-and-genericsubscriber)`,
    "MultiSubscriber": `[${titleStart}MultiSubscriber${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#subscribing-to-multiple-topics)`,
    "NetworkTable": `[${titleStart}NetworkTables${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/tables-and-topics.html)`,
    "NetworkTableInstance": `[${titleStart}NetworkTableInstance${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/multiple-instances.html)`,
    
    /* CTRE */
    "SignalLogger": `[${titleStart}SignalLogger${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/api-usage/signal-logging.html)`,

    /* REV */
    "URCL": `[${titleStart}URCL${titleEnd}](https://docs.advantagescope.org/more-features/urcl)`,

    /* Limelight */
    "LimelightHelpers": `[${titleStart}LimelightHelpers${titleEnd}](https://docs.limelightvision.io/docs/docs-limelight/apis/limelight-lib)`
};

// Listed in alphabetical order
export const substringDictionary: Record<string, string> = {
    /* WPILib */
    "Entry": `[${titleStart}Entry${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#using-entry-to-both-subscribe-and-publish)`,
    "Publisher": `[${titleStart}Publisher${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#publishing-to-a-topic)`,
    "PubSubOption": `[${titleStart}PubSubOption${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#publish-subscribe-options)`,
    "Shuffleboard": `[${titleStart}Shuffleboard${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/shuffleboard/layouts-with-code/index.html)`,
    "Subscriber": `[${titleStart}Subscriber${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#subscribing-to-a-topic)`,
};