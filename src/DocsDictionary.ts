const titleStart: string = "Click to open ";
const titleEnd: string = " documentation";

// Listed by topic, and then by alphabetical order
export const stringDictionary: Record<string, string> = {
    /* WPILib */
    //"": `[${titleStart}${titleEnd}]()`,

    // Dashboards
    "Field2d": `[${titleStart}Field2d${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/glass/field2d-widget.html)`,
    "Mechanism2d": `[${titleStart}Mechanism2d${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/glass/mech2d-widget.html)`,
    "SendableChooser": `[${titleStart}SendableChooser${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/smartdashboard/choosing-an-autonomous-program-from-smartdashboard.html#creating-sendablechooser-object)`,
    
    // Telemetry
    "DataLogManager": `[${titleStart}DataLogManager${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/telemetry/datalog.html)`,
    "SmartDashboard": `[${titleStart}SmartDashboard${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/dashboards/smartdashboard/index.html)`, // SmartDashboard is deprecated and will be removed for 2027

    // Sensors
    "DigitalInput": `[${titleStart}Digital Inputs${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/hardware-apis/sensors/digital-inputs-software.html)`,

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
    "Power": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Resistance": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Temperature": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Time": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Torque": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    "Voltage": `[${titleStart}Units${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/basic-programming/java-units.html)`,
    
    // Command-Based Programming
    // - Commands
    "Command": `[${titleStart}Command${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/index.html)`,
    // - Subsystems
    "SubsystemBase": `[${titleStart}Subsystem${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/subsystems.html)`,
    // - Binding Commands to Triggers
    "CommandJoystick": `[${titleStart}HID Factories${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/binding-commands-to-triggers.html#hid-factories)`,
    "CommandPS4Controller": `[${titleStart}HID Factories${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/binding-commands-to-triggers.html#hid-factories)`,
    "CommandXboxController": `[${titleStart}HID Factories${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/binding-commands-to-triggers.html#hid-factories)`,
    // - The Command Scheduler
    "CommandScheduler": `[${titleStart}CommandScheduler${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/commandbased/command-scheduler.html)`,
    
    // NetworkTables
    "GenericEntry": `[${titleStart}Generic${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#using-genericentry-genericpublisher-and-genericsubscriber)`,
    "GenericPublisher": `[${titleStart}Generic${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#using-genericentry-genericpublisher-and-genericsubscriber)`,
    "GenericSubscriber": `[${titleStart}Generic${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#using-genericentry-genericpublisher-and-genericsubscriber)`,
    "MultiSubscriber": `[${titleStart}MultiSubscriber${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/publish-and-subscribe.html#subscribing-to-multiple-topics)`,
    "NetworkTable": `[${titleStart}NetworkTables${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/tables-and-topics.html)`,
    "NetworkTableInstance": `[${titleStart}NetworkTableInstance${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/networktables/multiple-instances.html)`,

    // Advanced Controls
    // - Geometry Classes
    "Pose2d": `[${titleStart}Pose2d${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/geometry/pose.html)`,
    "Rotation2d": `[${titleStart}Rotation2d${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/geometry/pose.html)`,
    "Translation2d": `[${titleStart}Translation2d${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/geometry/pose.html)`,
    // - System Identification
    "SysIdRoutine": `[${titleStart}SysId Routine${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/system-identification/creating-routine.html)`,
    // - Controllers
    "ArmFeedforward": `[${titleStart}Arm Feedforward${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/controllers/feedforward.html#armfeedforward)`,
    "ElevatorFeedforward": `[${titleStart}Elevator Feedforward${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/controllers/feedforward.html#elevatorfeedforward)`,
    "PIDController": `[${titleStart}PID Control${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/controllers/pidcontroller.html)`,
    "ProfiledPIDController": `[${titleStart}Profiled PID Controller${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/controllers/profiled-pidcontroller.html)`,
    "SimpleMotorFeedforward": `[${titleStart}Simple Motor Feedforward${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/controllers/feedforward.html#simplemotorfeedforward)`,
    "TrapezoidProfile": `[${titleStart}Motion Profile${titleEnd}](https://docs.wpilib.org/en/stable/docs/software/advanced-controls/controllers/trapezoidal-profiles.html)`,

    /* REV */
    "SparkFlex": `[${titleStart}REV's SPARK${titleEnd}](https://docs.revrobotics.com/revlib/24-to-25#including-the-library-and-creating-a-spark-object)`,
    "SparkMax": `[${titleStart}REV's SPARK${titleEnd}](https://docs.revrobotics.com/revlib/24-to-25#including-the-library-and-creating-a-spark-object)`,

    // Configuring a SPARK
    "SparkClosedLoopController": `[${titleStart}REV's Closed Loop Control${titleEnd}](https://docs.revrobotics.com/revlib/spark/closed-loop)`,

    // Closed Loop Control
    "SparkFlexConfig": `[${titleStart}REV's Configuration${titleEnd}](https://docs.revrobotics.com/revlib/spark/configuring-a-spark)`,
    "SparkMaxConfig": `[${titleStart}REV's Configuration${titleEnd}](https://docs.revrobotics.com/revlib/spark/configuring-a-spark)`,
    
    /* CTRE */
    // General API Usage
    "TalonFXConfiguration": `[${titleStart}CTRE's TalonFXConfiguration${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/api-usage/configuration.html)`,
    "SignalLogger": `[${titleStart}CTRE's SignalLogger${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/api-usage/signal-logging.html)`,

    // Device API
    "Slot0Configs": `[${titleStart}CTRE's Basic PID and Profiling${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/device-specific/talonfx/basic-pid-control.html)`,
    "Slot1Configs": `[${titleStart}CTRE's Basic PID and Profiling${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/device-specific/talonfx/basic-pid-control.html)`,
    "Slot2Configs": `[${titleStart}CTRE's Basic PID and Profiling${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/device-specific/talonfx/basic-pid-control.html)`,
    "RemoteCANcoder": `[${titleStart}CTRE's TalonFX Remote Sensors${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/device-specific/talonfx/remote-sensors.html#remotecancoder)`,
    "FusedCANcoder": `[${titleStart}CTRE's TalonFX Remote Sensors${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/device-specific/talonfx/remote-sensors.html#fusedcancoder)`,
    "SyncCANcoder": `[${titleStart}CTRE's TalonFX Remote Sensors${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/device-specific/talonfx/remote-sensors.html#synccancoder)`,
    
    // Mechanisms -> Swerve Overview
    "SwerveDrivetrainConstants": `[${titleStart}CTRE's Swerve Builder API${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/mechanisms/swerve/swerve-builder-api.html#defining-drivetrain-characteristics)`,
    "SwerveModuleConstantsFactory": `[${titleStart}CTRE's Swerve Builder API${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/mechanisms/swerve/swerve-builder-api.html#defining-module-characteristics)`,
    "SwerveModuleConstants": `[${titleStart}CTRE's Swerve Builder API${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/mechanisms/swerve/swerve-builder-api.html#building-the-swerve-module-constants)`,
    "SwerveRequest": `[${titleStart}CTRE's Swerve Requests${titleEnd}](https://v6.docs.ctr-electronics.com/en/stable/docs/api-reference/mechanisms/swerve/swerve-requests.html)`,

    /* AdvantageScope */
    "URCL": `[${titleStart}URCL${titleEnd}](https://docs.advantagescope.org/more-features/urcl)`,

    /* Limelight */
    "LimelightHelpers": `[${titleStart}LimelightHelpers${titleEnd}](https://docs.limelightvision.io/docs/docs-limelight/apis/limelight-lib)`,

    /* PathPlanner */
    "AutoBuilder": `[${titleStart}PathPlanner's AutoBuilder${titleEnd}](https://pathplanner.dev/pplib-getting-started.html#configure-autobuilder)`,
    "NamedCommands": `[${titleStart}PathPlanner's NamedCommands${titleEnd}](https://pathplanner.dev/pplib-named-commands.html)`
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