const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard,
		C3.Plugins.Audio,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.Tween,
		C3.Plugins.Touch,
		C3.Plugins.iframe,
		C3.Plugins.Browser,
		C3.Plugins.AJAX,
		C3.Plugins.HTMLElement,
		C3.Plugins.DrawingCanvas,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Keyboard.Cnds.OnKeyReleased,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Browser.Acts.GoToURLWindow,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{squirrel: 0},
	{Sólido: 0},
	{piso: 0},
	{Mouse: 0},
	{Teclado: 0},
	{nut: 0},
	{Audio: 0},
	{platform_01: 0},
	{Plataforma: 0},
	{DesplazarHasta: 0},
	{Tweeninterpolación: 0},
	{cuadro_squirrel: 0},
	{left_arrow: 0},
	{up_arrow: 0},
	{ControlTáctil: 0},
	{right_arrow: 0},
	{cielo: 0},
	{iframe: 0},
	{ardillaDecor01: 0},
	{fondoEscenaRuleta: 0},
	{Navegador: 0},
	{AJAX: 0},
	{ElementoHTML: 0},
	{lienzo: 0},
	{url: 0},
	{numero: 0},
	{hueco_prueba: 0},
	{tronco: 0},
	{puntos: 0},
	{nut_contact: 0},
	{numeroPruebaVisible: 0},
	{puntos_nueces: 0}
];

self.InstanceType = {
	squirrel: class extends self.ISpriteInstance {},
	piso: class extends self.ITiledBackgroundInstance {},
	Mouse: class extends self.IInstance {},
	Teclado: class extends self.IInstance {},
	nut: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	platform_01: class extends self.ISpriteInstance {},
	cuadro_squirrel: class extends self.ISpriteInstance {},
	left_arrow: class extends self.ISpriteInstance {},
	up_arrow: class extends self.ISpriteInstance {},
	ControlTáctil: class extends self.IInstance {},
	right_arrow: class extends self.ISpriteInstance {},
	cielo: class extends self.ITiledBackgroundInstance {},
	iframe: class extends self.IIframeInstance {},
	ardillaDecor01: class extends self.ISpriteInstance {},
	fondoEscenaRuleta: class extends self.ITiledBackgroundInstance {},
	Navegador: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	ElementoHTML: class extends self.IHTMLElementInstance {},
	lienzo: class extends self.IDrawingCanvasInstance {},
	hueco_prueba: class extends self.ISpriteInstance {},
	tronco: class extends self.ISpriteInstance {},
	puntos: class extends self.ITextInstance {}
}