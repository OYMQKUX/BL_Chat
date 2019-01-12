class MainController {
    public static INSTANCE: MainController;
    public constructor() {

    }

    public get() {
        if (MainController.INSTANCE == null)
            MainController.INSTANCE = new MainController();
        return MainController.INSTANCE;
    }

    public reset() {
        if (MainController.INSTANCE)
            MainController.INSTANCE = null;
    }
}