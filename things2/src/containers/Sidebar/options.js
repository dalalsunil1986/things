const options = [
  {
    key: "blankPage",
    label: "sidebar.blankPage",
    leftIcon: "ion-document"
  },
  {
    key: "notes",
    label: "sidebar.notes",
    leftIcon: "ion-ios-paper"
  },
  {
    key: "testable",
    label: "sidebar.testable",
    leftIcon: "ion-ios-bonfire"
  },
  {
    key: "googlemap",
    label: "sidebar.googleMap",
    leftIcon: "ion-map",
  },
  {
    key: "mabel",
    label: "sidebar.mabel",
    leftIcon: "ion-pricetags"
  },
  {
    key: "chat",
    label: "sidebar.chat",
    leftIcon: "ion-paper"
  },
  {
    key: "people",
    label: "sidebar.people",
    leftIcon: "ion-bag",
    children: [
      {
        key: "add",
        label: "sidebar.people.add"
      }
    ]
  },
];
export default options;
