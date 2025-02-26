# Contributing Links to Types
All of the type names and links are stored in [DocsDictionay.ts](/src/DocsDictionary.ts).

Please make sure to respect the order of the keys - they are listed by vendor, then by order of topics on the vendor's website from top to bottom, and then in alphabetical order for keys on the same page.

Since the extension uses RegEx to match with this dictionary, the key in the dictionary must match your type exactly:
- If the type name you want to add is the entire word, add it to the stringDictionary.
- If you want to add one docs link to multiple types with similar substrings, add it to the substringDictionary. For example, `DoubleSubscriber` and `BooleanSubscriber` both match with the key `Subscriber`.