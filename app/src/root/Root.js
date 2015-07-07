class RootController {
  constructor() {
    console.log('RootController');
  }
}

export default () => {
  require('./root.scss');
  return {
    controller: RootController,
    controllerAs: 'vm',
    template: require('./root.html')
  };
};
