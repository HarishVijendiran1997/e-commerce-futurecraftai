const SettingsPage = () => {
    return (
        <div>
        <h1>Settings</h1>
        <p>Settings page content goes here.</p>
        <div className="flex flex-col gap-4">
            <label htmlFor="theme" className="text-sm font-medium">Theme</label>
            <select id="theme" className="p-2 border rounded">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            </div>
        </div>
    );
}

export default SettingsPage;