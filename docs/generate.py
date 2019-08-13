import subprocess as sp
from pathlib import Path

source_dir = Path(__file__).parent / "graphviz"
target_dir = Path(__file__).parent / "images"

for p in source_dir.iterdir():
    sp.run(["dot", "-Tsvg", p, "-o",  target_dir / (p.name + ".svg")])